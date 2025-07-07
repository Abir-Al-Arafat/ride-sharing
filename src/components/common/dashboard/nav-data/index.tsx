import {
  LayoutDashboard,
  UsersRound,
  Settings,
  Calendar,
  UserRound,
} from "lucide-react";

interface ItemProps {
  to?: string;
  icon?: React.ComponentType;
  label: string;
}

export interface SideDataProps {
  to?: string;
  icon?: React.ComponentType;
  label: string;
  submenu?: ItemProps[];
}
export const adminSideLinks: SideDataProps[] = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/parents", icon:  UsersRound, label: "Parents" },
  { to: "/drivers", icon:  UserRound, label: "Drivers" },
  { to: "/transactions", icon:Calendar, label: "Transactions" },
  {
    icon: Settings,
    label: "Settings",
    submenu: [
      { to: "/change-password", label: "Change Password" },
      { to: "/change-password", label: "Change Password" },
      { to: "/change-password", label: "Change Password" },
    ],
  },
];
