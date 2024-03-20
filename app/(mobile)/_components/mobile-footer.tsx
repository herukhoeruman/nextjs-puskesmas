import {
  CircleUserRound,
  FileClock,
  HomeIcon,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

export const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white h-16 border-t shadow-md">
      <div className="flex items-center justify-between mx-8 my-4">
        <Link href="/dashboard">
          <HomeIcon className="w-6 h-6 text-blue-600" />
        </Link>
        <Link href="/dashboard">
          <MessageCircle className="w-6 h-6 text-slate-600" />
        </Link>
        <Link href="/dashboard">
          <MoreHorizontal className="w-6 h-6 text-slate-600" />
        </Link>
        <Link href="/dashboard">
          <CircleUserRound className="w-6 h-6 text-slate-600" />
        </Link>
      </div>
    </div>
  );
};
