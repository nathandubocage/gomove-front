import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Food.scss";

const Food: FC = () => {
  return (
    <Fragment>
      <Heading content="Est-ce que la nourriture est quelque chose d'important pour vous ?" />

      <span className="small">Une seule réponse possible</span>

      <section className="food"></section>
    </Fragment>
  );
};

export default Food;
