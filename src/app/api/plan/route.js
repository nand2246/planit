import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  const {
    title,
    description,
    location,
    minAttendees,
    maxAttendees,
    dateTime,
    image,
    tags,
    state,
    userId,
  } = await req.json()

  await prisma.plan.create({
    data: {
      title,
      description,
      location,
      minAttendees,
      maxAttendees,
      dateTime,
      image,
      tags: [tags],
      state,
      creatorId: userId,
      attendees: {
        create: [
          {
            user: {
              connect: {
                id: userId,
              },
            },
          },
        ],
      },
    },
  })

  return NextResponse.json({ message: 'Created Plan' }, { status: 200 })
}

export async function GET(req) {
  prisma.plan.findMany({
    include: {
      creator: true
    },
})
}
