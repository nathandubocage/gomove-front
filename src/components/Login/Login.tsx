import { Fragment } from "react";

import "./Login.scss";

import logoHeader from "../../assets/images/logo_header.svg";
import arrowLeft from "../../assets/icons/arrow_left.svg";

export default function Login() {
  return (
    <Fragment>
      <div className="wrapper">
        <header className="header">
          <button className="header__back">
            <img
              src={arrowLeft}
              alt="Retourner en arrière"
              className="header__arrow"
            />
          </button>

          <img src={logoHeader} alt="Gomove" className="header__logo" />
        </header>

        <section className="login">
          <h1 className="heading heading--primary">Se connecter</h1>

          <form className="login__form">
            <div className="login__column">
              <label className="login__label" htmlFor="email">
                Adresse e-mail*
              </label>
              <input
                className="login__input"
                type="text"
                id="email"
                placeholder="Votre adresse e-mail"
              />
            </div>

            <div className="login__column">
              <label className="login__label" htmlFor="password">
                Mot de passe*
              </label>
              <input
                className="login__input"
                type="password"
                id="password"
                placeholder="Votre mot de passe"
              />
            </div>

            <div className="login__row">
              {/* À transformer en composant */}
              <label className="switch">
                <input id="remember" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="remember">Se souvenir de moi</label>
            </div>
          </form>

          <button className="button button--primary">Se connecter</button>
        </section>
      </div>
    </Fragment>
  );
}
