import { TTravelParams } from "../types/travel.spec";

const travelRepository = {
  async getTravels(travelParams: TTravelParams) {
    try {
      const httpCall = await fetch(
        `http://localhost:3000/travels?nbPassagers=${travelParams.nbPassagers}&priceRange=${travelParams.priceRange}&departurePlace=${travelParams.departurePlace}&startDate=${travelParams.startDate}&endDate=${travelParams.endDate}&nbStopovers=${travelParams.nbStopovers}`
      );
      const response = await httpCall.json();
      return { data: response, error: undefined };
    } catch (error) {
      console.error(error);
      return { data: undefined, error: error };
    }
  },
};

export default travelRepository;
