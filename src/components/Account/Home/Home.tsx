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
import { useUserStore } from "../../../store/useUserStore";

export default function Home() {
  const navigate = useNavigate();
  const { userCriterias, userFavourites } = useUserStore();

  return (
    <Fragment>
      <div className="wrapper-single">
        <header className="header header--account">
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

          <div className="header__actions">
            <button onClick={() => navigate("/")}>
              <img
                src={logout}
                alt="Se déconnecter"
                className="header__logout"
              />
            </button>
          </div>
        </header>

        <section className="account">
          <CardCriteria
            onClick={() => {
              navigate("/criteria");
            }}
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
                subtitle="Lille"
              />
              <CardSetting
                onClick={() => {
                  navigate("/travel-date");
                }}
                title="Dates"
                subtitle={userCriterias?.departureDate || "Flexible"}
              />
              <CardSetting
                onClick={() => {
                  navigate("/passengers");
                }}
                title="Voyageurs"
                subtitle={
                  userCriterias?.passengers
                    ? String(userCriterias?.passengers!)
                    : "Non défini"
                }
              />
              <CardSetting
                onClick={() => {
                  navigate("/price");
                }}
                title="Budget"
                subtitle={
                  userCriterias?.budget
                    ? String(userCriterias?.budget)
                    : "Non défini"
                }
              />
              <CardSetting
                onClick={() => {
                  navigate("/destination");
                }}
                title="Destination"
                subtitle={
                  userCriterias?.destination
                    ? userCriterias?.destination
                    : "Non défini"
                }
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
          {userFavourites?.map((favourite) => (
            <SwiperSlide key={favourite.id}>
              <CardBookmark {...favourite} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Fragment>
  );
}
