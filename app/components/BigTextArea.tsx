"use client"; // Optional if you're using this in Next.js

import React, { FC, useState } from "react";

interface BigTextAreaProps {
  placeholder?: string;
  rows?: number;
  cols?: number;
  onChange?: (value: string) => void;
}

const BigTextArea: FC<BigTextAreaProps> = ({
  placeholder = "Type your text here...",
  rows = 20 ,
  cols = 90,
  onChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="w-full h-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 resize-none shadow-md"
      />
    </div>
  );
};

export default BigTextArea;
