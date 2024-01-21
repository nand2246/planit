import React from 'react';

const TextInput = ({ placeholder, value, onChange, disabled = false }) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
      className=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
      disabled={disabled}
    />
  );
};

export default TextInput;