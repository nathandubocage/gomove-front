import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Hobbies.scss";

const Hobbies: FC = () => {
  return (
    <Fragment>
      <Heading content="En vacances, vous quels types de personne êtes-vous ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="hobbies"></section>
    </Fragment>
  );
};

export default Hobbies;
