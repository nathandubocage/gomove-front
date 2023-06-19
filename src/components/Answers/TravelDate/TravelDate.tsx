import { Fragment } from "react";

import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";

import "./TravelDate.scss";

export default function TravelDate() {
  return (
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
            onInputChange={() => {
              console.log("Changement de valeur du nom et prénom");
            }}
          />
        </div>
      </section>
    </Fragment>
  );
}
