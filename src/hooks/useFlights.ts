import { useEffect, useState } from "react";
import { IFlightParams, TFlights } from "../types/travel.spec";
import travelRepository from "../repositories/travelRepository";

function useFlights(flightParams : IFlightParams): TFlights[] {
  const [flights, setFlights] = useState<TFlights | any>([]);

  const getFlights = async () => {
    try {

      const response = await travelRepository.getFlights(flightParams);
      setFlights(response.data);
      
    } catch (error) {
      console.error("Error fetching travels:", error);
    }
  };

  useEffect(() => {
    getFlights();
  }, []);

  return flights;
}

export default useFlights;
