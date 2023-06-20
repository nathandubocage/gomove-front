import { FC } from "react";

import "./Quantity.scss";

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
    <div className="quantity">
      <button
        className="quantity__button quantity__button--first"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="quantity__input"
        type="number"
        value={value}
        onChange={handleChange}
      />
      <button
        className="quantity__button quantity__button--last"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
