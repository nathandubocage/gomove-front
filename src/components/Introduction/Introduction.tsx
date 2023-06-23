import { Fragment } from "react";

import arrowLeft from "../../assets/icons/arrow_left.svg";

import Heading from "../Heading/Heading";
import Button from "../Button/Button";

import "./Introduction.scss";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header header--single">
          <button
            className="header__back"
            onClick={() => window.history.back()}
          >
            <img
              src={arrowLeft}
              alt="Retourner en arrière"
              className="header__arrow"
            />
          </button>
        </header>

        <section className="introduction">
          <Heading content="Vos réponses, <br />nos trouvailles" />

          <p className="introduction__description">
            Afin d’affiner un maximum les destinations proposées, nous avons
            besoin de quelques réponses...
          </p>

          <p className="introduction__description">
            Ne vous inquiétez pas, vous pourrez changer vos critères de
            recherche plus tard
          </p>

          <Button onClick={() => navigate("/answers")} content="Continuer" />
        </section>
      </div>
    </Fragment>
  );
}
