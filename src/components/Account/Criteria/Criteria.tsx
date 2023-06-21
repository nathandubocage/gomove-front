import { Fragment, useState } from "react";

import Heading from "../../Heading/Heading";
import CardSetting from "../../Card/Setting/CardSetting";

import arrowLeft from "../../../assets/icons/arrow_left.svg";
import cross from "../../../assets/icons/cross.svg";

import "./Criteria.scss";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Criteria() {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const clearCriteria = () => {
    closeModal();
  };

  const customStyles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "200px",
      borderRadius: "20px",
      width: "80%",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      boxShadow:
        "inset -12px -12px 36px rgba(23, 140, 199, 0.12), inset 12px 12px 36px rgba(255, 255, 255, 0.5)",
    },
    closeButton: {
      position: "absolute",
      top: "25px",
      right: "20px",
      background: "none",
      border: "none",
      fontSize: "large",
      cursor: "pointer",
    },
  };

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header header--account">
          <button
            onClick={() => window.history.back()}
            className="header__back"
          >
            <img
              src={arrowLeft}
              alt="Retourner en arrière"
              className="header__arrow"
            />
          </button>

          <div className="header__delete">
            <button onClick={openModal}>Effacer tous les critères</button>
          </div>
        </header>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <button style={customStyles.closeButton} onClick={closeModal}>
            <img src={cross} alt="Fermer la fenêtre" />
          </button>
          <h2 className="modal__heading">
            Êtes-vous sûr d’effacer tous les critères ?
          </h2>
          <button onClick={clearCriteria}>Oui</button>
          <button onClick={closeModal}>Non</button>
        </Modal>

        <Heading content="Mes critères" />

        <section className="criteria">
          <div className="criteria__cards">
            <CardSetting
              onClick={() => navigate("../weather")}
              title="Environnement"
              subtitle="Soleil ☀️, Ville 🌆"
            />
            <CardSetting
              onClick={() => navigate("../room")}
              title="Type de logement"
              subtitle="Hôtel 🏨, Camping ⛺️"
            />
            <CardSetting
              onClick={() => navigate("../travel")}
              title="Transport"
              subtitle="-"
            />
            <CardSetting
              onClick={() => navigate("../hobbies")}
              title="Activités"
              subtitle="Sorties le soir 🪩"
            />
            <CardSetting
              onClick={() => navigate("../food")}
              title="Importance nourriture"
              subtitle="Plutôt oui ☺️"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
}
