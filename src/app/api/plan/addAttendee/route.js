import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  console.log("GOT HERE")
  const {
    planId,
    userId,
  } = await req.json()
  console.log("test")
  await prisma.usersOnPlans.create({
    data: {
      userId,
      planId,
    },
  })
  console.log("AND HERE")

  return NextResponse.json({ message: 'Added Attendee' }, { status: 200 })
}
