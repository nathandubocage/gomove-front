import { Fragment } from "react";

import CardCriteria from "../../Card/Criteria/CardCriteria";

import "./Home.scss";

import arrowLeft from "../../../assets/icons/arrow_left.svg";
import logout from "../../../assets/icons/logout.svg";
import settings from "../../../assets/icons/settings.svg";
import criteria from "../../../assets/icons/criteria.svg";
import user from "../../../assets/icons/user.svg";

import backgroundCriteria from "../../../assets/images/background_criteria.png";
import CardSetting from "../../Card/Setting/CardSetting";

export default function Home() {
  return (
    <Fragment>
      <div className="wrapper">
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
              <CardSetting title="Localisation" subtitle="Paris" />
              <CardSetting title="Dates" subtitle="12/06/2023 - 18/06/2023" />
              <CardSetting title="Voyageurs" subtitle="2" />
              <CardSetting title="Budget" subtitle="< 800 €" />
              <CardSetting title="Destination" subtitle="Europe" />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
