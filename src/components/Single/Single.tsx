import { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Booking from "./Booking/Booking";
import City from "./City/City";

import arrowLeft from "../../assets/icons/arrow_left.svg";

import backgroundSingle from "../../assets/fake/berlin_single.png";

import "./Single.scss";
import TravelsHeader from "../TravelsHeader/TravelsHeader";

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
        <div className="single__tabs">
          <button
            className={
              activeTab === "tabOne"
                ? "single__tab single__tab--active"
                : "single__tab"
            }
            onClick={() => setActiveTab("tabOne")}
          >
            Réservation
          </button>
          <button
            className={
              activeTab === "tabTwo"
                ? "single__tab single__tab--active"
                : "single__tab"
            }
            onClick={() => setActiveTab("tabTwo")}
          >
            La ville
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "tabOne" && <Booking />}
          {activeTab === "tabTwo" && <City />}
        </div>
      </section>
    </Fragment>
  );
}
