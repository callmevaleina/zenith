"use client"
import React, { useState } from 'react';

export interface IOption {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  options: IOption[];
}

const CustomSelect = ({ options }: ICustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption || ''} onChange={handleChange} className='text-xs text-grayText font-light outline-none'>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
