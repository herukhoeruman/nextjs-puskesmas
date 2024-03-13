"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const SidebarItem = ({ href, icon: Icon, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-4 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-orange-600 bg-orange-200/20 hover:bg-orange-200/20 hover:text-orange-600"
      )}
    >
      <div className="flex items-center gap-x-2 py-3">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-orange-600")}
        />
        {label}
      </div>
      {/* <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      ></div> */}
    </button>
  );
};
