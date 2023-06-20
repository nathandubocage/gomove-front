import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Room.scss";

const Room: FC = () => {
  return (
    <Fragment>
      <Heading content="Quels types de logement affectionnez-vous ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="room"></section>
    </Fragment>
  );
};

export default Room;
