import React from 'react'

const OpaqueButton = ({ text, type, callback }) => {
  return (
    <div className="w-20 h-10 mx-1 items-start inline-flex">
      <button className="w-20 h-10 px-4 bg-slate-400 rounded-md justify-center items-center gap-1 flex">
        <div className="text-white text-lg font-bold font-['Inter']">{text}</div>
      </button>
    </div>
  )
}

export default OpaqueButton
