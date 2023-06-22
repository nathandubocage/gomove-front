import { FC, Fragment } from "react";

import { InputState } from "../../../types/input.spec";

import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// import { DateRangePicker } from "react-date-range";

import "./TravelDate.scss";

const TravelDate: FC<InputState> = ({ value, onChange }) => {
  // const handleSelect = (ranges: any) => {
  //   console.log(ranges);
  //   // {
  //   //   selection: {
  //   //     startDate: [native Date Object],
  //   //     endDate: [native Date Object],
  //   //   }
  //   // }
  // };

  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // };

  return (
    <Fragment>
      <Heading content="Pendant combien de jours souhaitez vous voyager ?" />

      <section className="travel-date">
        <div className="travel-date__column">
          <label className="travel-date__label" htmlFor="date">
            Dates (optionnel)
          </label>

          <Input
            id="date"
            type="date"
            placeholder="Vos dates de voyage"
            onChange={onChange}
            value={value}
          />

          {/* <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> */}
        </div>
      </section>
    </Fragment>
  );
};

export default TravelDate;
