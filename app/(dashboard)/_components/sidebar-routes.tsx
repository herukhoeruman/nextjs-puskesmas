"use client";

import { Compass, List } from "lucide-react";

import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const routes = [
  {
    icon: Compass,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: List,
    label: "Data",
    href: "/data",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          href={route.href}
          icon={route.icon}
          label={route.label}
        />
      ))}
    </div>
  );
};
