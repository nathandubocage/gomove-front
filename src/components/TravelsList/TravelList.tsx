import useTravels from "../../hooks/useTravels";
import Button from "../Button/Button";
import TravelCard from "../TravelCard/TravelCard";
import swipeUp from "../../assets/icons/swipe_up.svg";
import TravelsHeader from "../TravelsHeader/TravelsHeader";

import { useNavigate } from "react-router-dom";
import { TTravel } from "../../types/travel.spec";
import { useState } from "react";

export default function Travel() {
  const travels = useTravels();
  const [travel, setTravel] = useState<TTravel>();

  const navigate = useNavigate();

  const onTravelChange = (travel: TTravel) => {
    setTravel(travel);
  };

  return travels.length > 0 ? (
    <div className="flex flex-col gap-8 h-screen relative">
      <TravelsHeader />
      <div className="h-full w-full snap-mandatory snap-y overflow-y-scroll">
        {travels.map((travel) => (
          <TravelCard key={travel.id} travel={travel} onTravelChange={onTravelChange} />
        ))}
      </div>
      <div className="h-1/4 px-6 py-6 flex flex-col gap-8">
        <p className="flex items-center justify-center gap-2">
          <span className="font-space-grotesk text-sm text-[#30213B]">
            Glissez à la vertical
          </span>{" "}
          <img src={swipeUp} alt="Swipe up" />
        </p>
        <div className="h-1/4 flex flex-col">
          <Button
            onClick={() => navigate(`../single/${travel!.id.substring(3)}`, { state: { travel } })}
            content="Voir le bon plan"
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
