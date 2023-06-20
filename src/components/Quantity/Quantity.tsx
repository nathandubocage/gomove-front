import { FC } from "react";

import { QuantityProps } from "../../types/quantity.spec";

const Quantity: FC<QuantityProps> = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Quantity;
