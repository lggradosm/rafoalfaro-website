import React from "react";

export default function TextArea({ label }) {
  return (
    <div className="relative w-full contact__form mb-6 mt-6">
      <textarea
        className=" h-32 placeholder-transparent duration-300 focus:border-white outline-none text-sm text-white p-4 bg-transparent border-b-2 border-neutral-500 w-full"
        type="text"
        placeholder={label}
      ></textarea>
      <label
        htmlFor=""
        className="text-sm  duration-300 text-neutral-400 absolute left-4 top-4"
      >
        {label}
      </label>
    </div>
  );
}
