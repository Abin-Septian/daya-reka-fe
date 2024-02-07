import {
  AlertCircle,
  Archive,
  ArchiveX,
  BaggageClaim,
  Briefcase,
  CandlestickChart,
  Clipboard,
  ConciergeBell,
  Contact2,
  File,
  Grid2X2,
  Inbox,
  LayoutGrid,
  LogOut,
  LucideIcon,
  LucideLogOut,
  MenuIcon,
  MessagesSquare,
  MousePointerSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Truck,
  Users,
  Users2,
} from "lucide-react";

export type TMenu = {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  path: string;
};

export const menu: TMenu[] = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    variant: "default",
    path: "/",
  },
  {
    title: "Stock",
    icon: BaggageClaim,
    variant: "ghost",
    path: "/stock",
  },
  {
    title: "Customer",
    icon: Users,
    variant: "ghost",
    path: "/customer",
  },
  {
    title: "Restaurant",
    icon: ConciergeBell,
    variant: "ghost",
    path: "/restaurant",
  },
  {
    title: "Design",
    icon: MousePointerSquare,
    variant: "ghost",
    path: "/design",
  },
  {
    title: "Report",
    icon: Clipboard,
    variant: "ghost",
    path: "/report",
  },
  {
    title: "Role & Admin",
    icon: Contact2,
    variant: "ghost",
    path: "/role",
  },
  {
    title: "Settings",
    icon: CandlestickChart,
    variant: "ghost",
    path: "/settings",
  },
];

export const integration: TMenu[] = [
  {
    title: "Stock",
    icon: ShoppingCart,
    variant: "default",
    path: "/integration/stock",
  },
  {
    title: "Supply",
    icon: Truck,
    variant: "ghost",
    path: "/integration/supply",
  },
];
