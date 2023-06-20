import React, { FC } from "react";

import { RangeProps } from "../../types/range.spec";

const Range: FC<RangeProps> = ({ value, min, max, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value, 10));
  };

  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      onChange={handleChange}
    />
  );
};

export default Range;
