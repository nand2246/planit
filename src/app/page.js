'use client'

import React from 'react'
import ProfileClient from '../components/User.jsx'
import Navigation from '../components/Navigation.jsx'

export default function Home() {
  return (
    <>
      <a href="/api/auth/signup">Sign up</a>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <ProfileClient></ProfileClient>
      <Navigation></Navigation>
    </>
  )
}
