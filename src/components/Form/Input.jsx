import React from "react";

export default function Input({ label, autoFocus = false }) {
  return (
    <div className="relative w-full contact__form mb-6 ">
      <input
        autoFocus={autoFocus}
        className="placeholder-transparent duration-300 focus:border-white outline-none text-sm text-white p-4 bg-transparent border-b-2 border-neutral-500 w-full"
        type="text"
        placeholder={label}
      />
      <label
        htmlFor=""
        className="text-sm  duration-300 text-neutral-400 absolute left-4 bottom-4"
      >
        {label}
      </label>
    </div>
  );
}
