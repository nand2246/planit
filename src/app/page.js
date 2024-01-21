'use client'

import React from 'react'
import ProfileClient from '../components/User.jsx'

export default function Home() {
  return (
    <>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <ProfileClient></ProfileClient>
    </>
  )
}
