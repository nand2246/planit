import React, { useState } from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const ListInput = ({ label, value, onChange }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleAddString = () => {
		if (inputValue.trim() !== '') {
			onChange([...value, inputValue.trim()]);
			setInputValue('');
		}
	};

	const handleRemoveString = (index) => {
		const updatedList = [...value];
		updatedList.splice(index, 1);
		onChange(updatedList);
	};

	return (
		<div className={"font-['Inter'] " + inter.className}>
			<div className='mb-2'>
				<div className="w-48 h-6 text-neutral-700 text-base font-normal tracking-wider p">{label}</div>
					<input className='w-60 h-9 bg-gray-200 rounded' type="text" value={inputValue} onChange={handleInputChange} />
					<button className='w-20' onClick={handleAddString}>Add</button>
			</div>

			<div className="w-80 h-40 p-2.5 bg-gray-200 rounded-lg">
			<div className='flex flex-row flex-wrap w-16'>
				{value.map((item, index) => (
					<button key={index} className=" m-1 w-20 h-6 relative" onClick={() => handleRemoveString(index)}>
				<div className="w-20 h-6 left-0 top-0 absolute bg-amber-300 rounded-2xl" />
					<div className="w-12 h-3.5 left-[8px] top-[5px] text-left absolute text-neutral-700 text-xs font-normal tracking-wide">{item}</div>
				  </button>

				))}
			</div>
			</div>
		</div>
	);
};

export default ListInput;