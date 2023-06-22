import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

import Booking from "./Booking/Booking";
import City from "./City/City";

import arrowLeft from "../../assets/icons/arrow_left.svg";

import "./Single.scss";
import { TTravel } from "../../types/travel.spec";
import getCountryFlagEmoji from "../../utils/get-country-flag";

export default function Single() {
  const location = useLocation();
  const travel: TTravel = location.state.travel;

  const [activeTab, setActiveTab] = useState("tabOne");

  return (
    <Fragment>
      <header
        style={{
          backgroundImage: `linear-gradient(
          180deg,
          transparent 0%,
          rgba(255, 255, 255, 1) 100%
        ),url(${travel.destination.image})`,
        }}
        className="header header--sized flex flex-col-reverse single-header"
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

        <h2 className="my-4 font-integral-cf font-bold text-4xl">
          {travel.destination.city}{" "}
          {getCountryFlagEmoji(travel.destination.country)}
        </h2>
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
