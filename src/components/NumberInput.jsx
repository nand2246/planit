import React from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const NumberInput = ({ placeholder, value, onChange }) => {
  return (
    <div className={"font-['Inter'] " + inter.className}>
      <div className="w-48 h-6 text-neutral-700 text-base font-normal tracking-wider">{placeholder}</div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-80 h-9 bg-gray-200 rounded p-3"
      />
    </div>
  );
};

export default NumberInput;

