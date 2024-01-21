import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req) {
  const { id } = await req.json()

  const userData = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })

  return NextResponse.json(userData, { status: 200 })
}
