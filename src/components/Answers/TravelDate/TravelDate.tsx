import { FC, Fragment, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { addDays, format } from "date-fns";

import { InputState } from "../../../types/input.spec";

import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";

import "./TravelDate.scss";

const pastMonth = new Date(2020, 10, 15);

const TravelDate: FC<InputState> = ({ value, onChange }) => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

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
            onChange={onChange}
            value={value}
          />

          <DayPicker
            id="test"
            mode="range"
            defaultMonth={pastMonth}
            selected={range}
            footer={footer}
            onSelect={setRange}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default TravelDate;
