/** @format */

import {
  BellIcon,
  ClockCounterClockwiseIcon,
  CoinIcon,
  CrownIcon,
  GearIcon,
  HeartIcon,
  MedalIcon,
  MoneyIcon,
  ShieldCheckIcon,
  TicketIcon,
  UserIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";

export const _SIDEBAR_MENU = [
  {
    id: 1,
    name: "Profile",
    link: "/profile",
    icon: UserIcon,
  },
  {
    id: 2,
    name: "History",
    link: "/profile/history",
    icon: ClockCounterClockwiseIcon,
  },
  {
    id: 3,
    name: "Favorites",
    link: "/profile/favorites",
    icon: HeartIcon,
  },
  {
    id: 4,
    name: "Notifications",
    link: "/profile/notifications",
    icon: BellIcon,
  },
  {
    id: 5,
    name: "Badges",
    link: "/profile/badges",
    icon: MedalIcon,
  },
  {
    id: 6,
    name: "Leaderboard",
    link: "/profile/leaderboard",
    icon: CrownIcon,
  },
  {
    id: 7,
    name: "Support Ticket",
    link: "/profile/support-ticket",
    icon: TicketIcon,
  },
  {
    id: 8,
    name: "Coin History",
    link: "/profile/coin-history",
    icon: CoinIcon,
  },
  {
    id: 9,
    name: "Withdraw",
    link: "/profile/withdraw",
    icon: MoneyIcon,
  },
  {
    id: 10,
    name: "Buy Coins",
    link: "/profile/buy-coins",
    icon: ShieldCheckIcon,
  },
  {
    id: 11,
    name: "Invite Friends",
    link: "/profile/invite-friends",
    icon: UsersThreeIcon,
  },
  {
    id: 12,
    name: "Settings",
    link: "/profile/settings",
    icon: GearIcon,
  },
];
