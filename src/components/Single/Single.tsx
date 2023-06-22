import { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Booking from "./Booking/Booking";
import City from "./City/City";

import arrowLeft from "../../assets/icons/arrow_left.svg";

import backgroundSingle from "../../assets/fake/berlin_single.png";

import "./Single.scss";

export default function Single() {
  const { id: number } = useParams();

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("tabOne");

  return (
    <Fragment>
      <header
        style={{ backgroundImage: `url(${backgroundSingle})` }}
        className="header header--sized"
      >
        <button
          className="header__back header__back--single"
          onClick={() => window.history.back()}
        >
          <img
            src={arrowLeft}
            alt="Retourner en arrière"
            className="header__arrow"
          />
        </button>
      </header>

      <section className="single">
        <div className="tabs">
          <button onClick={() => setActiveTab("tabOne")}>Onglet 1</button>
          <button onClick={() => setActiveTab("tabTwo")}>Onglet 2</button>
        </div>

        <div className="tab-content">
          {activeTab === "tab1" && <Booking />}
          {activeTab === "tab2" && <City />}
        </div>
      </section>
    </Fragment>
  );
}
