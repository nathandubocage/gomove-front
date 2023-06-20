import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";
import Range from "../../Range/Range";

import "./Price.scss";

import { RangeState } from "../../../types/range.spec";

const Price: FC<RangeState> = ({ value, onChange }) => {
  return (
    <Fragment>
      <Heading content="Quel est votre budget ?" />

      <section className="price">
        <label className="price__label">&lt; {value} €</label>

        <Range value={value} min={0} max={100} onChange={onChange} />
      </section>
    </Fragment>
  );
};

export default Price;
