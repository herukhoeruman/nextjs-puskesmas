"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const user = useCurrentUser();

  if (user) {
    router.push("/dashboard");
    return null;
  }
};

export default Page;
