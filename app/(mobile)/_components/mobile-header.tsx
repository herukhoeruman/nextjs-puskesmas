import { ButtonSession } from "@/app/(dashboard)/_components/button-session";
import { GetLocation } from "@/components/get-location";
import { currentUser } from "@/lib/auth";
import Image from "next/image";

export const MobileHeader = async () => {
  const user = await currentUser();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-lg font-bold">Hi, {user?.name}!</p>
        <GetLocation />
      </div>
      <div className="relative flex items-start justify-between bg-blue-500 w-full h-36 rounded-3xl p-4">
        <div>
          <p className="text-md text-white font-medium">
            Jaga tubuhmu, jaga pikiranmu.
          </p>
          <p className="text-md text-white font-medium">Sehat itu keren!</p>
          <button className="border rounded-full bg-white text-blue-600 font-medium text-xs px-3 py-2 mt-8">
            Mulai sekarang!
          </button>
        </div>
        <Image
          src="/nurse.png"
          width={120}
          height={120}
          alt="nurse.png"
          className="absolute bottom-0 right-0 z-20"
        />
      </div>
    </div>
  );
};
