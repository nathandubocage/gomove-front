import { Fragment } from "react";

import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "../Button/Button";

import logoHeader from "../../assets/images/logo_header.svg";
import arrowLeft from "../../assets/icons/arrow_left.svg";

import "./Register.scss";

export default function Register() {
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

        <section className="register">
          <Heading content="Créer mon compte" />

          <form className="register__form">
            <div className="register__column">
              <label className="register__label" htmlFor="name">
                Nom et prénom*
              </label>

              <Input
                id="name"
                type="text"
                placeholder="Votre nom et prénom"
                onChange={(event) => {
                  console.log(event);
                  console.log("Changement de valeur du nom et prénom");
                }}
                value=""
              />
            </div>

            <div className="register__column">
              <label className="register__label" htmlFor="phone">
                Téléphone*
              </label>

              <Input
                id="phone"
                type="tel"
                placeholder="00/00/00/00/00"
                onChange={(event) => {
                  console.log(event);
                  console.log("Changement de valeur du téléphone");
                }}
                value=""
              />
            </div>

            <div className="register__column">
              <label className="register__label" htmlFor="email">
                Adresse e-mail*
              </label>

              <Input
                id="email"
                type="email"
                placeholder="Votre adresse e-mail"
                value=""
                onChange={(event) => {
                  console.log(event);
                  console.log("Changement de valeur de l'e-mail");
                }}
              />
            </div>

            <div className="register__column">
              <label className="register__label" htmlFor="password">
                Adresse e-mail*
              </label>

              <Input
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                value=""
                onChange={(event) => {
                  console.log(event);
                  console.log("Changement de valeur du mot de passe");
                }}
              />
            </div>
          </form>

          <Button content="Créer mon compte" />
        </section>
      </div>
    </Fragment>
  );
}
