import { TTravelParams } from "../types/travel.spec";

const travelRepository = {
  async getTravels(travelParams: TTravelParams) {
    try {
      const httpCall = await fetch(
        `${import.meta.env.VITE_API_URL}/travels?nbPassagers=${
          travelParams.nbPassagers
        }&priceRange=${travelParams.priceRange}&departurePlace=${
          travelParams.departurePlace
        }&startDate=${travelParams.startDate}&endDate=${
          travelParams.endDate
        }&nbStopovers=${travelParams.nbStopovers}&duration=${
          travelParams.duration
        }`
      );
      const response = await httpCall.json();
      console.log(response);
      return { data: response, error: undefined };
    } catch (error) {
      console.error(error);
      return { data: undefined, error: error };
    }
  },
};

export default travelRepository;
