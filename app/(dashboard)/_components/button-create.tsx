import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mails, Pencil, Trash } from "lucide-react";
import Link from "next/link";

export const ButtonCreate = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-4 w-full transition-all hover:text-slate-600 hover:bg-slate-300/20">
          <div className="flex items-center gap-x-2 py-4">
            <Pencil className="text-slate-500 w-5 h-5" />
            Buat Konsep Naskah Dinas
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Buat Konsep</DropdownMenuLabel>
        <Link href="/surat-masuk/create">
          <DropdownMenuItem>
            <Mails className="h-4 w-4 mr-2" />
            Input Surat Masuk
          </DropdownMenuItem>
        </Link>
        <Link href="/nota-dinas/create">
          <DropdownMenuItem>
            <Pencil className="h-4 w-4 mr-2" />
            Konsep Nota Dinas
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <Trash className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
