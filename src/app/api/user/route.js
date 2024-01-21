import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  const { id, email, firstName, lastName, location, phoneNumber, interests } = await req.json();

  await prisma.user.create({
    data: {
      id, 
      firstName,
      lastName,
      phoneNumber,
      email,
      rating: 100,
      interests: [interests],
      location,
    },
  })

  return NextResponse.json({ message: 'Created User' }, { status: 200 })
}
