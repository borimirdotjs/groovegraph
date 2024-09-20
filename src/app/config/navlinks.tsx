import { IconType } from "react-icons";
import { RiDashboardFill, RiDashboardLine, RiCalendarFill, RiCalendarLine } from "react-icons/ri";

type NavLink = {
  icon: IconType;
  activeIcon: IconType;
  label: string;
  href: string; //TODO: create a type for only allowed
};

export const NAV_LINKS: NavLink[] = [
  {
    icon: RiDashboardLine,
    activeIcon: RiDashboardFill,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: RiCalendarLine,
    activeIcon: RiCalendarFill,
    label: "Calendar",
    href: "/calendar",
  },
];
