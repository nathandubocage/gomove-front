import { TTravel } from "../../types/travel.spec";
import getCountryFlagEmoji from "../../utils/get-country-flag";
import roundTrip from "../../assets/icons/round_trip.svg";
import heartEmpty from "../../assets/icons/heart_empty.svg";
import heartFull from "../../assets/icons/heart_full.svg";
import "./TravelCard.scss";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "../../store/useUserStore";

export default function TravelCard({
  travel,
  onTravelChange,
}: {
  travel: TTravel;
  onTravelChange: (travel: TTravel) => void;
}) {
  const { userFavourites, addUserFavourite, removeUserFavourite } =
    useUserStore();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const cardRef = useRef(null);

  const checkIfFavourite = () => {
    if (userFavourites.length > 0) {
      userFavourites.forEach((favourite) => {
        if (favourite.id === travel.id) {
          setIsFavorite(true);
        }
      });
    }
  };

  useEffect(() => {
    checkIfFavourite();

    const options = {
      root: null, // Utilise la fenêtre comme racine d'observation
      rootMargin: "0px",
      threshold: 0.5, // Définit le seuil d'intersection à 50%
    };


    const observer = new IntersectionObserver((entries) => {
      const isVisible = entries[0].isIntersecting;
      if (isVisible) {
        onTravelChange(travel);
      }
    }, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return travel.transport.length > 0 && travel.transport[0]!.price !== null ? (
    <div
      ref={cardRef}
      className="h-full flex flex-col-reverse snap-center bg-cover"
      style={{ backgroundImage: `url(${travel.destination.image})` }}
    >
      <div className="h-2/5 py-16 flex flex-col travel-card-infos px-6 text-[#30233E] gap-2">
        <h2 className="flex font-bold font-integral-cf uppercase tracking-wider gap-2">
          <span className="text-4xl h-full leading-normal">
            {travel.destination.city}
          </span>
          <span className="text-5xl">
            {getCountryFlagEmoji(travel.destination.country!)}
          </span>
        </h2>

        <div className="flex flex-col gap-2">
          <p className="font-space-grotesk font-bold text-normal">
            à partir de
            <span className="text-3xl"> {travel.transport[0]!.price} €</span>
          </p>
          <p className="flex gap-2">
            <img src={roundTrip} alt="Modifier" />
            <span className="font-space-grotesk font-bold">Aller retour</span>
          </p>
          <div className=" flex flex-row-reverse">
            {!isFavorite ? (
              <button
                onClick={() => {
                  setIsFavorite(!isFavorite);
                  addUserFavourite(travel);
                }}
              >
                <img src={heartEmpty} alt="Ajouter aux favoris" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsFavorite(!isFavorite);
                  removeUserFavourite(travel.id!);
                }}
              >
                <img src={heartFull} alt="Ajouter aux favoris" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
