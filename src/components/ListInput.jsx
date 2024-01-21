import React, { useState } from 'react';

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
		<div>
			<div>
				<input type="text" value={inputValue} onChange={handleInputChange} />
				<button onClick={handleAddString}>Add</button>
			</div>
			<div className='flex flex-row flex-wrap w-16'>
				{value.map((item, index) => (
					<div key={index} className='w-fit p-1'>
						{item}
						<button onClick={() => handleRemoveString(index)}>x</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListInput;