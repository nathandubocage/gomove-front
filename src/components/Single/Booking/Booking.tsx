import { Fragment, useState } from "react";
import { useUserStore } from "../../../store/useUserStore";
import CardBooking from "../../Card/Booking/CardBooking";

import "./Booking.scss";

import { useNavigate } from "react-router-dom";
import useFlights from "../../../hooks/useFlights";
import { TTravel } from "../../../types/travel.spec";

export default function Booking(travel: TTravel) {
  const { userCriterias } = useUserStore();
  const flights = useFlights({
    nbPassagers: String(userCriterias?.passengers),
    departurePlace: "/m/0d8r8",
    travelPlace: travel.id,
    startDate: travel.date.start,
    endDate: travel.date.end,
  });
  const navigate = useNavigate();

  const [currentCardOutward, setCurrentCardOutward] = useState<number | null>(
    null
  );

  const handleClick = (id: number) => {
    setCurrentCardOutward(id);
  };

  const goToSelectReturn = () => {
    if (currentCardOutward) {
      navigate(`../single/${travel!.id.substring(3)}/booking`, {
        state: { travel },
      });
    }
  };

  return (
    <Fragment>
      <div className="booking__filters flex justify-center gap-1.5 w-full">
        <a
          href="/passengers"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Voyageurs</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.passengers! || 2}
          </p>
        </a>

        <a
          href="/price"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Budget</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            &lt; {userCriterias?.budget! || "250"} €
          </p>
        </a>

        <a
          href="/destination"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Destination</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.destination! || "-"}
          </p>
        </a>

        <a
          href="/travel-date"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Date</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.departureDate!}
          </p>
        </a>
      </div>

      <div className="outward">
        <h2 className="outward__title">Choisissez votre aller</h2>

        <div className="outward__cards">
          {flights.map((flight, index) => (
            <CardBooking
              key={index}
              id={index}
              onClick={handleClick}
              flight={flight}
              isSelected={currentCardOutward === index}
            />
          ))}
        </div>

        <button
          disabled={!currentCardOutward}
          onClick={goToSelectReturn}
          className="button button--primary button--full button--absolute"
        >
          Choisir mon retour
        </button>
      </div>
    </Fragment>
  );
}
