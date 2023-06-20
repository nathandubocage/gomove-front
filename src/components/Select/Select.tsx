import { FC, ChangeEvent } from "react";

import { SelectProps } from "../../types/location.spec";

const Select: FC<SelectProps> = ({ value, onChange, options }) => {
  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleInputChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
