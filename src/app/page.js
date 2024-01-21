'use client'

import React from 'react'
import Image from 'next/image.js'
import OpaqueButton from '@/components/buttons/OpaqueButton.jsx'

import { Amaranth } from 'next/font/google'

const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function Home() {
  return (
    <>
    <div>
      <Image
      src="/Gradient.png"
      layout='fill'
      objectFit='cover'
      alt="Picture of the author"
      style={{
        objectFit: 'cover',
        zIndex: -1
      }}
      />
      <div className='w-screen items-start justify-end flex p-10'>
          <a href="/api/auth/signup">
            <OpaqueButton text={"Sign Up"}/>
          </a>
          <a href="/api/auth/login">        
            <OpaqueButton text={"Login"}/>
          </a>
      </div>
      <div className='w-screen h-screen items-center justify-center flex pb-80'>
        <div className={"w-80 h-72 w-fit text-stone-400 align-center justify-center text-8xl font-bold font-['Amaranth'] " + amaranth.className}>Make a <br/> plan,  <br/>make a <br/>friend.</div>
      </div>

    </div>

    </>
  )
}
