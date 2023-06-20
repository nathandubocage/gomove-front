import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Weather.scss";

const Weather: FC = () => {
  return (
    <Fragment>
      <Heading content="Quels environnements préférez-vous pour vos vacances ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="weather"></section>
    </Fragment>
  );
};

export default Weather;
