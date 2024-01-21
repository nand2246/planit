import React from 'react';

const DateTimeInput = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="datetime-local"
        value={value}
        onChange={onChange}
        className=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
      />
    </div>
  );
};

export default DateTimeInput;

