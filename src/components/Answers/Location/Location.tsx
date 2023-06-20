import { FC } from "react";

import Select from "../../Select/Select";

import { LocationProps } from "../../../types/location.spec";

const Location: FC<LocationProps> = ({
  continentValue,
  onContinentChange,
  countryValue,
  onCountryChange,
}) => {
  return (
    <div>
      <Select
        value={continentValue}
        onChange={onContinentChange}
        options={[
          "Europe",
          "Asia",
          "Africa",
          "North America",
          "South America",
          "Oceania",
          "Antarctica",
        ]}
      />
      <Select
        value={countryValue}
        onChange={onCountryChange}
        options={["France", "Spain", "United States", "China", "Italy"]}
      />
    </div>
  );
};

export default Location;
