import { useEffect, useState } from "react";
import travelRepository from "../repositories/travelRepository";
import { TTravel } from "../types/travel.spec";

function useTravels(): TTravel[] {
  const [travels, setTravels] = useState<TTravel[]>([]);

  const getTravels = async () => {
    try {
      // TO DO: Rendre les paramètres dynamiques
      const travelParams = {
        nbPassagers: "[1, 0, 0, 0]",
        priceRange: "null",
        departurePlace: "[['/m/0d8r8', 5]]",
        startDate: "2023-06-30",
        endDate: "2023-07-03",
        nbStopovers: "0",
      };

      const response = await travelRepository.getTravels(travelParams);
      setTravels(response.data);
    } catch (error) {
      console.error("Error fetching travels:", error);
    }
  };

  useEffect(() => {
    getTravels();
  }, []);

  return travels;
}

export default useTravels;
