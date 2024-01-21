'use client'

import React from 'react'
import Image from 'next/image.js'
import ProfileClient from '../components/User.jsx'

export default function Home() {
  return (
    <>
    <Image
      src="/Gradient.png"
      layout='fill'
      objectFit='cover'
      alt="Picture of the author"
    />      <a href="/api/auth/signup">Sign up</a>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <ProfileClient></ProfileClient>
    </>
  )
}
