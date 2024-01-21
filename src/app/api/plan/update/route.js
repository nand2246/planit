import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  const {
    id,
    title,
    description,
    location,
    minAttendees,
    maxAttendees,
    dateTime,
    image,
    tags,
    } = await req.json()

  await prisma.plan.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      location,
      minAttendees,
      maxAttendees,
      dateTime,
      image,
      tags: tags,
    },
  })

  return NextResponse.json({ message: 'Saved Plan' }, { status: 200 })
}
