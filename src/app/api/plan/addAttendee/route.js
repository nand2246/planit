import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  const { planId, userId } = await req.json()
  await prisma.usersOnPlans.create({
    data: {
      userId,
      planId,
    },
  })

  return NextResponse.json({ message: 'Added Attendee' }, { status: 200 })
}
