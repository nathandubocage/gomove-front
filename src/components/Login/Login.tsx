import { Fragment } from "react";

import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Switch from "../Switch/Switch";

import "./Login.scss";

import logoHeader from "../../assets/images/logo_header.svg";
import arrowLeft from "../../assets/icons/arrow_left.svg";
import Input from "../Input/Input";

export default function Login() {
  const handleSwitch = (checked: boolean) => {
    console.log(checked);
  };

  const handleEmailChange = (value: string) => {
    console.log("La nouvelle valeur de l'e-mail est : ", value);
  };

  const handlePasswordChange = (value: string) => {
    console.log("La nouvelle valeur du mot de passe est : ", value);
  };

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
          <Heading content="Se connecter" />

          <form className="login__form">
            <div className="login__column">
              <label className="login__label" htmlFor="email">
                Adresse e-mail*
              </label>

              <Input
                id="email"
                type="text"
                placeholder="Votre adresse e-mail"
                onInputChange={handleEmailChange}
              />
            </div>

            <div className="login__column">
              <label className="login__label" htmlFor="password">
                Mot de passe*
              </label>

              <Input
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                onInputChange={handlePasswordChange}
              />
            </div>

            <div className="login__row">
              <Switch initial={false} onChange={handleSwitch} id="remember" />
              <label
                className="login__label login__label--light"
                htmlFor="remember"
              >
                Se souvenir de moi
              </label>
            </div>
          </form>

          <Button content="Se connecter" />
        </section>
      </div>
    </Fragment>
  );
}
