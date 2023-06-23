import arrowLeft from "../../../assets/icons/arrow_left.svg";

import airFrance from "../../../assets/images/airfrance.svg";
import airPlaneMode from "../../../assets/icons/airplanemode_active.svg";
import separator from "../../../assets/icons/separator.svg";
import info from "../../../assets/icons/info.svg";

import "./Summary.scss";

export default function Summary() {
  return (
    <div className="wrapper">
      <header className="header--single">
        <button
          className="header__back header__back--position"
          onClick={() => window.history.back()}
        >
          <img
            src={arrowLeft}
            alt="Retourner en arrière"
            className="header__arrow"
          />
        </button>
      </header>

      <section className="summary">
        <h2 className="summary__title">Récapitulatif</h2>

        <div className="summary__container">
          <div className="summary__card">
            <div className="summary__card-header">
              <div className="summary__card-date">Aller : 12 Juin 2023</div>
              <div className="summary__card-details">
                <img src={airPlaneMode} alt="Avion" />
                <span>Avion</span>
                <img src={airFrance} alt="Air France" />
              </div>
            </div>

            <div className="summary__card-body">
              <div className="summary__card-first">
                <img
                  className="summary__card-separator"
                  src={separator}
                  alt="Séparateur"
                />
                <div className="summary__card-data">
                  <div>
                    <span className="summary__card-hour">21:20</span>
                    <span className="summary__card-airport">Orly (ORL)</span>
                    <span className="summary__card-duration">
                      Durée : 1h 40 min
                    </span>
                  </div>

                  <div>
                    <span className="summary__card-hour">23:00</span>
                    <span className="summary__card-airport">
                      Brandenburg (BER)
                    </span>
                  </div>
                </div>
              </div>

              <div className="summary__card-price">35 €</div>
            </div>
          </div>

          <div className="summary__card">
            <div className="summary__card-header">
              <div className="summary__card-date">Aller : 12 Juin 2023</div>
              <div className="summary__card-details">
                <img src={airPlaneMode} alt="Avion" />
                <span>Avion</span>
                <img src={airFrance} alt="Air France" />
              </div>
            </div>

            <div className="summary__card-body">
              <div className="summary__card-first">
                <img
                  className="summary__card-separator"
                  src={separator}
                  alt="Séparateur"
                />
                <div className="summary__card-data">
                  <div>
                    <span className="summary__card-hour">21:20</span>
                    <span className="summary__card-airport">Orly (ORL)</span>
                    <span className="summary__card-duration">
                      Durée : 1h 40 min
                    </span>
                  </div>

                  <div>
                    <span className="summary__card-hour">23:00</span>
                    <span className="summary__card-airport">
                      Brandenburg (BER)
                    </span>
                  </div>
                </div>
              </div>

              <div className="summary__card-price">35 €</div>
            </div>
          </div>
        </div>

        <div className="summary__booking">
          <h2 className="summary__title">Options de réservations</h2>

          <div className="summary__box">
            <div>
              <span className="summary__box-title">
                Vous devez prendre vos billets séparément
              </span>
              <span className="summary__box-subtitle">
                Les voyages ne sont pas opérés par la même compagnie
              </span>
            </div>
            <img src={info} alt="Information" />
          </div>
        </div>

        <div className="summary__actions">
          <button className="button button--primary button--booking">
            <img src={airFrance} /> Réserver avec Air France <span>35 €</span>
          </button>
        </div>
      </section>
    </div>
  );
}
