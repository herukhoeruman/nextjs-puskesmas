import Link from "next/link";
import { ChevronLeft, CircleHelp } from "lucide-react";

interface AppBarProps {
  title: string;
}

export const AppBar = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-between w-full bg-white h-16 border-b px-4">
      <Link href="/dashboard" className="border rounded-lg p-1">
        <ChevronLeft className="w-6 h-6 " />
      </Link>
      <p className="font-medium">Sebaran hasil cek</p>
      <Link href="/dashboard" className="border rounded-lg p-1">
        <CircleHelp className="w-6 h-6 " />
      </Link>
    </div>
  );
};