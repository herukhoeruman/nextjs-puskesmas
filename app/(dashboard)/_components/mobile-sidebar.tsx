"use client";

import { Compass, List, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SidebarItem } from "./sidebar-item";
import Link from "next/link";
import Image from "next/image";

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

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        {/* <Sidebar /> */}

        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
          <div className="flex items-center py-2 px-6 border-bb h-[65px]">
            <Link href="/dashboard">
              <Image src="/pizza.png" width={40} height={40} alt="logo" />
            </Link>
          </div>
          {/* <ScrollArea className="flex flex-col w-full">
            <SidebarRoutes />
          </ScrollArea> */}

          <div className="flex flex-col w-full">
            {routes.map((route) => (
              <div
                className="flex flex-col w-full"
                onClick={() => setOpen(false)}
                key={route.href}
              >
                <SidebarItem
                  href={route.href}
                  icon={route.icon}
                  label={route.label}
                />
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
