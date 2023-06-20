import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";
import Quantity from "../../Quantity/Quantity";

import { QuantityProps } from "../../../types/quantity.spec";

import "./Number.scss";

const Number: FC<QuantityProps> = ({ value, onChange }) => {
  return (
    <Fragment>
      <Heading content="À combien de personnes souhaitez-vous partir ?" />

      <section className="number">
        <div className="number__column">
          <Quantity value={value} onChange={onChange} />
        </div>
      </section>
    </Fragment>
  );
};

export default Number;
