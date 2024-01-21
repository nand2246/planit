import React from 'react';

const TextInput = ({ placeholder, value, onChange, disabled = false }) => {
  return (
    <div>
      <div className="w-48 h-6 text-neutral-700 text-base font-normal font-['Inter'] tracking-wider p">{placeholder}</div>
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