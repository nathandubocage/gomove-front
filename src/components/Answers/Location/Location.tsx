import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";
import Select from "../../Select/Select";

import "./Location.scss";

import { LocationProps } from "../../../types/location.spec";

const Location: FC<LocationProps> = ({
  continentCountries,
  continentValue,
  onContinentChange,
  countryValue,
  onCountryChange,
  availableCountries,
}) => {
  const continentList = [
    "Sélectionnez un continent",
    ...Object.keys(continentCountries),
  ];

  return (
    <Fragment>
      <Heading content="Quelle partie du monde souhaitez-vous explorer ?" />

      <section className="location">
        <div className="location__column">
          <label className="location__label" htmlFor="name">
            Continent
          </label>

          <Select
            value={continentValue}
            onChange={onContinentChange}
            options={continentList}
          />
        </div>

        <div className="location__column">
          <label className="location__label" htmlFor="country">
            Pays (Optionnel)
          </label>

          <Select
            value={countryValue}
            onChange={onCountryChange}
            options={
              continentValue
                ? ["Sélectionnez un pays", ...availableCountries]
                : ["Sélectionnez un continent d'abord"]
            }
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Location;
