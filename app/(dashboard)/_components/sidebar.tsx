import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarRoutes } from "./sidebar-routes";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="flex items-center py-2 px-6 border-bb h-[65px]">
        <Link href="/dashboard">
          <Image src="/pizza.png" width={40} height={40} alt="logo" />
        </Link>
      </div>
      <ScrollArea className="flex flex-col w-full">
        <SidebarRoutes />
      </ScrollArea>
    </div>
  );
};
