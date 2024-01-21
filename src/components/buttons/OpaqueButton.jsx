import React from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const OpaqueButton = ({ text, type, callback }) => {
  return (
    <div className="w-22 h-10 mx-1 items-start inline-flex">
      <button className="w-22 h-10 px-4 bg-slate-400 rounded-md justify-center items-center gap-1 flex" onClick={callback} type={type}>
        <div className={"text-white text-lg font-bold font-['Inter']" + inter.className}>{text}</div>
      </button>
    </div>
  )
}

export default OpaqueButton
