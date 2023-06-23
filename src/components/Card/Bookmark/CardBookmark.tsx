import "./CardBookmark.scss";

import passengers from "../../../assets/icons/passengers.svg";
import arrows from "../../../assets/icons/arrows.svg";
import { TTravel } from "../../../types/travel.spec";
import getCountryFlagEmoji from "../../../utils/get-country-flag";
import { useUserStore } from "../../../store/useUserStore";
import { useNavigate } from "react-router-dom";

type TCardBookmarkProps = TTravel;

export default function CardBookmark(cardBookmarkProps: TCardBookmarkProps) {
  const { removeUserFavourite } = useUserStore();
  const navigate = useNavigate();

  return (
    <div
      className="card-bookmark"
      onClick={() => {
        navigate(`../single/${cardBookmarkProps?.id!.substring(3)}`, {
          state: { travel: cardBookmarkProps },
        });
      }}
    >
      <img
        src={cardBookmarkProps.destination.image}
        alt="Ville de Berlin"
        className="card-bookmark__image"
      />
      <div className="card-bookmark__content">
        <div className="card-bookmark__city">
          {cardBookmarkProps.destination.city}{" "}
          {getCountryFlagEmoji(cardBookmarkProps.destination.country)}
        </div>
        <div className="card-bookmark__date">
          {cardBookmarkProps.date.start} - {cardBookmarkProps.date.end}
        </div>
        <div className="card-bookmark__price">
          à partir de {cardBookmarkProps.transport[0].price}€
        </div>
        <div className="card-bookmark__more">
          <div className="card-bookmark__spacing">
            <img src={passengers} /> 2
          </div>
          <div className="card-bookmark__spacing">
            <img src={arrows} /> Aller retour
          </div>
        </div>
        <div className="absolute top-0 right-0 px-2">
          <button
            className="font-space-grotesk font-thin text-3xl"
            onClick={() => removeUserFavourite(cardBookmarkProps.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
