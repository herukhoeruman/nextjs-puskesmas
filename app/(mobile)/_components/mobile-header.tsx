"use client";

import { ButtonSession } from "@/app/(dashboard)/_components/button-session";
import { GetLocation } from "@/components/get-location";
import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const MobileHeader = () => {
  // const user = await currentUser();
  const user = useCurrentUser();

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            getAddress(position.coords.latitude, position.coords.longitude);
          },
          (err) => setError(err.message)
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const getAddress = async (lat: number, lng: number) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      setAddress(response.data.display_name);
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Address not found");
    }
  };

  console.log(`${latitude}, ${longitude}`);
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-lg font-bold">Hi, {user?.name}!</p>
        {!address ? (
          <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
        ) : (
          <p className="text-xs">{address}</p>
        )}
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
