import { currentUser } from "@/lib/auth";
import { MobileSidebar } from "./mobile-sidebar";
import { ButtonSession } from "./button-session";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm">
      <MobileSidebar />
      <div className="ml-auto flex items-center justify-between gap-x-3">
        <ModeToggle />
        <ButtonSession />
      </div>
    </div>
  );
};
