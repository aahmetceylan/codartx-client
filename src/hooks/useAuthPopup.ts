"use client";

import { useCallback, useState } from "react";

export function useOAuthPopup() {
  const [authCode, setAuthCode] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [provider, setProvider] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const openGlobalPopup = useCallback((url: string) => {
    setError(null);
    setProvider(null);
    setAuthCode(null);
    setAuthToken(null);

    const width = 500;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const popup = window.open(
      "",
      "openGlobalPopup",
      `width=${width},height=${height},top=${top},left=${left}`,
    );

    if (!popup) {
      setError("Popup was blocked. Please allow pop-ups for this site.");
      return;
    }

    try {
      popup.location.href = url;
    } catch (e: any) {
      setError(e);
      popup.close();
      return;
    }

    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      const { code, token, error, provider } = event.data;

      // Yeni flow: token direkt geliyor
      if (token && provider) {
        setAuthToken(token);
        setProvider(provider);
        popup.close();
      }
      // Eski flow: code geliyor
      else if (code && provider) {
        setAuthCode(code);
        setProvider(provider);
        popup.close();
      } else if (error) {
        setError(error);
        setProvider(false);
        popup.close();
      }
    };

    window.addEventListener("message", receiveMessage);

    const timeoutId = setTimeout(() => {
      setError("Authentication timed out");
      popup.close();
    }, 120000);

    return () => {
      window.removeEventListener("message", receiveMessage);
      clearTimeout(timeoutId);
    };
  }, []);

  return { openGlobalPopup, authCode, authToken, error, provider };
}
