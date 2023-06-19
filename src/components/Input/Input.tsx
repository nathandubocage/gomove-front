import React, { ChangeEvent, useState } from "react";

import "./Input.scss";

interface InputProps {
  id: string;
  placeholder: string;
  type: string;
  onInputChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  onInputChange,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  return (
    <input
      className="input"
      id={id}
      placeholder={placeholder}
      type={type}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Input;
