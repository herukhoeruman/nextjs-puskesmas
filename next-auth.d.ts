import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  username: string;
  role: UserRole;
  // position: string;
  // department: string;
  // departmentCode: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
