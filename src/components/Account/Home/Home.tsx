import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import CardCriteria from "../../Card/Criteria/CardCriteria";
import CardSetting from "../../Card/Setting/CardSetting";
import CardBookmark from "../../Card/Bookmark/CardBookmark";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Home.scss";

import arrowLeft from "../../../assets/icons/arrow_left.svg";
import logout from "../../../assets/icons/logout.svg";
import settings from "../../../assets/icons/settings.svg";
import criteria from "../../../assets/icons/criteria.svg";
import user from "../../../assets/icons/user.svg";
import heart from "../../../assets/icons/heart.svg";

import backgroundCriteria from "../../../assets/images/background_criteria.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="wrapper-single">
        <header className="header header--account">
          <button className="header__back">
            <img
              src={arrowLeft}
              alt="Retourner en arrière"
              className="header__arrow"
            />
          </button>

          <div className="header__actions">
            <button>
              <img
                src={logout}
                alt="Se déconnecter"
                className="header__logout"
              />
            </button>

            <button>
              <img
                src={settings}
                alt="Paramètres du compte"
                className="header__settings"
              />
            </button>
          </div>
        </header>

        <section className="account">
          <CardCriteria
            background={backgroundCriteria}
            icon={criteria}
            title="Mes critères"
          />

          <div className="account__profil">
            <div className="account__profil-heading">
              <img
                src={user}
                alt="Mon profil"
                className="account__profil-user"
              />
              <span className="account__profil-title">Mon profil</span>
            </div>

            <div className="account__profil-cards">
              <CardSetting
                onClick={() => {
                  navigate("/location");
                }}
                title="Localisation"
                subtitle="Paris"
              />
              <CardSetting
                onClick={() => {
                  navigate("/travel-date");
                }}
                title="Dates"
                subtitle="12/06/2023 - 18/06/2023"
              />
              <CardSetting
                onClick={() => {
                  navigate("/passengers");
                }}
                title="Voyageurs"
                subtitle="2"
              />
              <CardSetting
                onClick={() => {
                  navigate("/price");
                }}
                title="Budget"
                subtitle="< 800 €"
              />
              <CardSetting
                onClick={() => {
                  navigate("/destination");
                }}
                title="Destination"
                subtitle="Europe"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="bookmarks">
        <div className="wrapper-single">
          <div className="bookmarks__heading">
            <img src={heart} alt="Mon profil" className="bookmarks__heart" />
            <span className="bookmarks__title">Coups de coeur</span>
          </div>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1.25}
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
          centeredSlides={false}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <CardBookmark />
          </SwiperSlide>
          <SwiperSlide>
            <CardBookmark />
          </SwiperSlide>
          <SwiperSlide>
            <CardBookmark />
          </SwiperSlide>
          <SwiperSlide>
            <CardBookmark />
          </SwiperSlide>
          <SwiperSlide>
            <CardBookmark />
          </SwiperSlide>
          <SwiperSlide>
            <CardBookmark />
          </SwiperSlide>
        </Swiper>
      </section>
    </Fragment>
  );
}
