import React from 'react';

const DateTimeInput = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <div className="w-48 h-6 text-neutral-700 text-base font-normal font-['Inter'] tracking-wider">{placeholder}</div>
      <input
        placeholder={placeholder}
        type="datetime-local"
        value={value}
        onChange={onChange}
        className="w-80 h-9 bg-gray-200 rounded p-3"
      />
    </div>
  );
};

export default DateTimeInput;

