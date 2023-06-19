import { InputProps } from "../../types/input.spec";

import "./Input.scss";

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  onChange,
  value,
}) => {
  return (
    <input
      className="input"
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
