import { FC } from "react";

import Range from "../../Range/Range";

import { RangeState } from "../../../types/range.spec";

const Price: FC<RangeState> = ({ value, onChange }) => {
  return (
    <section className="price">
      <label className="price__label" htmlFor="price">
        Price
      </label>

      <Range value={value} min={0} max={100} onChange={onChange} />

      <p>&lt; {value} €</p>
    </section>
  );
};

export default Price;
