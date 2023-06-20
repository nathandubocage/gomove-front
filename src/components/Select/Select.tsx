import { FC, ChangeEvent } from "react";

import "./Select.scss";

import { SelectProps } from "../../types/location.spec";

const Select: FC<SelectProps> = ({ value, onChange, options }) => {
  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="select-wrapper">
      <select className="select" value={value} onChange={handleInputChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
