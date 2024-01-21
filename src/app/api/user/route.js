import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req) {
  const { firstName } = await req.json();

  await prisma.user.create({
    data: {
      firstName,
      lastName: "yes",
      phoneNumber: "123",
      email: "me@me.com",
      rating: 100,
      interests: ["art", "sport"],
      location: "here",
    },
  });

  return NextResponse.json({ message: "Created User" }, { status: 200 });
}
