import Link from "next/link";
import { ChevronLeft, CircleHelp } from "lucide-react";

interface AppBarProps {
  title: string;
  url?: string;
}

export const AppBar = ({ title, url = "/dashboard" }: AppBarProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full bg-white h-16 border-b px-4">
      <Link href={url} className="border rounded-lg p-1">
        <ChevronLeft className="w-6 h-6 " />
      </Link>
      <p className="font-medium">{title}</p>
      <Link href={url} className="border rounded-lg p-1">
        <CircleHelp className="w-6 h-6 " />
      </Link>
    </div>
  );
};
