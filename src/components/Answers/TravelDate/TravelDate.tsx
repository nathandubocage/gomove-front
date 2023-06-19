import { FC, Fragment } from "react";

import { InputState } from "../../../types/input.spec";

import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";

import "./TravelDate.scss";

const TravelDate: FC<InputState> = ({ value, onChange }) => (
  <Fragment>
    <Heading content="Pendant combien de jours souhaitez vous voyager ?" />

    <section className="travel">
      <div className="travel__column">
        <label className="travel__label" htmlFor="date">
          Dates (optionnel)
        </label>

        <Input
          id="date"
          type="date"
          placeholder="Vos dates de voyage"
          onChange={onChange}
          value={value}
        />
      </div>
    </section>
  </Fragment>
);

export default TravelDate;
