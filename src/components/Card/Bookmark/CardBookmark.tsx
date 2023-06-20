import "./CardBookmark.scss";

import passengers from "../../../assets/icons/passengers.svg";
import arrows from "../../../assets/icons/arrows.svg";

export default function CardBookmark() {
  return (
    <div className="card-bookmark">
      <img
        src="https://cdn.pixabay.com/photo/2020/05/01/15/18/brand-front-of-the-brandenburg-gate-5117579_1280.jpg"
        alt="Ville de Berlin"
        className="card-bookmark__image"
      />
      <div className="card-bookmark__content">
        <div className="card-bookmark__city">Berlin 🇩🇪</div>
        <div className="card-bookmark__date">12/06/2023 - 18/06/2023</div>
        <div className="card-bookmark__price">à partir de 120€</div>

        <div className="card-bookmark__more">
          <div className="card-bookmark__spacing">
            <img src={passengers} /> 2
          </div>
          <div className="card-bookmark__spacing">
            <img src={arrows} /> Aller retour
          </div>
        </div>
      </div>
    </div>
  );
}
