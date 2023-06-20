import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Travel.scss";

const Travel: FC = () => {
  return (
    <Fragment>
      <Heading content="Quels modes de transport avez-vous envie de privilégier ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="room"></section>
    </Fragment>
  );
};

export default Travel;
