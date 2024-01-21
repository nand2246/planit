import React from 'react'
import Image from 'next/image'

export default function Navigation() {
  return (
    <div className="w-full h-11 px-12 py-1 bg-gray-200 justify-center items-start gap-14 inline-flex"
    style={{ position: "absolute", bottom: 0, left:0, width:"100%" }}>
    <Image
      src="/images/icons/events.svg"
      alt="Plans"
      width={32}
      height={32}
    />
    <a href='/plan/create'>
      <Image
        src="/images/icons/add.svg"
        alt="Create plan"
        width={32}
        height={32}
      />
    </a>
    <a href='/user'>
      <Image
        src="/images/icons/profile.svg"
        alt="Profile"
        width={32}
        height={32}
      />`
    </a>
    <Image
      src="/images/icons/settings.svg"
      alt="Settings"
      width={32}
      height={32}
    />
    </div>
  )
}
