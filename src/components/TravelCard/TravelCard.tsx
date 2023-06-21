import { TTravel } from "../../types/travel.spec";
import getCountryFlagEmoji from "../../utils/get-country-flag";
import roundTrip from "../../assets/icons/round_trip.svg";
import "./TravelCard.scss";

export default function TravelCard(props: TTravel) {
  return props.transport.length > 0 && props.transport[0].price !== null ? (
    <div
      className="h-full flex flex-col-reverse snap-center bg-cover"
      style={{ backgroundImage: `url(${props.destination.image})` }}
    >
      <div className="h-2/5 py-16 flex flex-col travel-card-infos px-6 text-[#30233E] gap-2">
        <h2 className="flex font-bold font-integral-cf uppercase tracking-wider gap-2">
          <span className="text-4xl h-full leading-normal">
            {props.destination.city}
          </span>
          <span className="text-5xl">
            {getCountryFlagEmoji(props.destination.country)}
          </span>
        </h2>
       
          <div className="flex flex-col gap-2">
            <p className="font-space-grotesk font-bold text-normal">
              à partir de
              <span className="text-3xl"> {props.transport[0].price} €</span>
            </p>
            <p className="flex gap-2">
              <img src={roundTrip} alt="Modifier" />
              <span className="font-space-grotesk font-bold">Aller retour</span>
            </p>
          </div>
        
      </div>
    </div>
  ): <></>;
}
