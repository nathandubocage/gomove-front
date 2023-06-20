import { TTravelParams } from "../types/travel.spec";

const travelRepository = {
  async getTravels(travelParams: TTravelParams) {
    try {
      const httpCall = await fetch(
        `${import.meta.env.VITE_API_URL}/travels?nbPassagers=1&priceRange=10&departurePlace=/m/0d8r8&startDate=2023-06-30&endDate=2023-07-03&nbStopovers=0&duration=two-weeks`
      );
      const response = await httpCall.json();
      console.log(response)
      return { data: response, error: undefined };
    } catch (error) {
      console.error(error);
      return { data: undefined, error: error };
    }
  },
};

export default travelRepository;
