import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail, getUserByUsername } from "@/data/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const validatedFields = RegisterSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json(
        { error: validatedFields.error },
        { status: 400 }
      );
    }

    const { username, password, name, email } = validatedFields.data;

    const usernameExists = await getUserByUsername(username);
    const emailExists = await getUserByEmail(email);

    if (usernameExists || emailExists) {
      return NextResponse.json(
        { error: "Username or email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        username,
      },
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );

    //todo: send email password
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
