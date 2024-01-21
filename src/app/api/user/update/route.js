import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  const { id, firstName, lastName, location, phoneNumber, interests } =
    await req.json()

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      phoneNumber,
      interests: interests,
      location,
    },
  })

  return NextResponse.json({ message: 'Saved User' }, { status: 200 })
}
