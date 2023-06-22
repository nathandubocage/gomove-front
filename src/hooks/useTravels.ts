import { useEffect, useState } from "react";
import travelRepository from "../repositories/travelRepository";
import { TTravel } from "../types/travel.spec";
import { useUserStore } from "../store/useUserStore";
import { useTravelsStore } from "../store/useTravelsStore";

function useTravels(): TTravel[] {
  const { travels, setTravels } = useTravelsStore();
  const { userCriterias } = useUserStore();

  const getTravels = async () => {
    try {
      const travelParams = {
        nbPassagers: userCriterias?.passengers
          ? String(userCriterias?.passengers)
          : "1",
        priceRange: userCriterias?.budget
          ? String(userCriterias?.budget)
          : "250",
        departurePlace: "/m/0d8r8",
        startDate: userCriterias?.departureDate || "2023-12-01",
        endDate: userCriterias?.returnDate || "2023-12-07",
        nbStopovers: "0",
        duration: "one-week",
      };

      const response = await travelRepository.getTravels(travelParams);
      setTravels(response.data);
    } catch (error) {
      console.error("Error fetching travels:", error);
    }
  };

  useEffect(() => {
    if (travels === null) {
      getTravels();
    }
  }, []);

  // useEffect(() => {
  //   if (userCriterias) {
  //     getTravels(); // Appel lors de chaque changement de userCriterias
  //   }
  // }, [userCriterias]);

  return travels!;
}

export default useTravels;
