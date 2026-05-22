/** @format */

"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const OauthLogin = ({ provider }: { provider: string }) => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const code = searchParams.get("code");

  useEffect(() => {
    if (!provider) return;

    // Token direkt geldi (backend redirect flow)
    if (token) {
      if (window.opener) {
        window.opener.postMessage(
          { token: token, provider: provider },
          window.location.origin,
        );
        window.close();
      } else {
        // Popup değil, direkt yönlendirme - token'ı localStorage'a yaz ve ana sayfaya git
        localStorage.setItem("oauth_token", token);
        localStorage.setItem("oauth_provider", provider);
        window.location.href = "/";
      }
      return;
    }

    // Eski flow - code ile
    if (code) {
      if (window.opener) {
        window.opener.postMessage(
          { code: code, provider: provider },
          window.location.origin,
        );
        window.close();
      }
    }
  }, [code, token, provider]);

  return null;
};

export default OauthLogin;
