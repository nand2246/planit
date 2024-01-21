import React from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const TextInput = ({ placeholder, value, onChange, disabled = false }) => {
  return (
    <div className={"font-['Inter'] " + inter.className}>
      <div className={"w-48 h-6 text-neutral-700 text-base font-normal tracking-wider p "}>{placeholder}</div>
      <input
        className="w-80 h-9 bg-gray-200 rounded p-3"
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;