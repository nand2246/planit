import React from 'react'

import { Amaranth } from 'next/font/google'
const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const TitleText = ({ text }) => {
  return (
    <div className={"text-stone-400 text-5xl font-bold font-['Amaranth'] pb-5 " + amaranth.className}>{text}</div>
  )
}

export default TitleText
