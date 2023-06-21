import { Fragment, useState } from "react";

import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "../Button/Button";

import logoHeader from "../../assets/images/logo_header.svg";
import arrowLeft from "../../assets/icons/arrow_left.svg";

import "./Register.scss";
import useRegister from "../../hooks/useRegister";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleSubmit } = useRegister();

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header">
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
                onChange={(event) => setName(event.target.value)}
                value={name}
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
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
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
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>

            <div className="register__column">
              <label className="register__label" htmlFor="password">
                Mot de passe*
              </label>

              <Input
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
          </form>

          <Button
            content="Créer mon compte"
            onClick={() => handleSubmit({ name, email, password, phone })}
          />
        </section>
      </div>
    </Fragment>
  );
}
