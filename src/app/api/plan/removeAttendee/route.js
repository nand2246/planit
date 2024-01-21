import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  console.log("test")

  const {
    planId,
    userId,
  } = await req.json()

  await prisma.usersOnPlans.delete({
    where: {
      userId_planId: {
        userId,
        planId, 
      }
    },
  })

  return NextResponse.json({ message: 'Added Attendee' }, { status: 200 })
}
