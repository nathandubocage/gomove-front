export interface ITravelParams {
  nbPassagers: string | null;
  priceRange: string | null;
  departurePlace: string | null;
  startDate: string | null;
  endDate: string | null;
  nbStopovers: string | null;
  duration: string | null;
}

export interface IFlightParams {
  nbPassagers: string | null;
  departurePlace: string | null;
  travelPlace: string | null;
  startDate: string | null;
  endDate: string | null;
}

export type TTravel = {
  id: string | null;
  destination: {
    city: string | null;
    country: string | null;
    image: string | null;
    distance: string | null;
  };
  date: {
    start: string | null;
    end: string | null;
  };
  transport:
    | [
        {
          price: number | null;
          company: string | null;
          airport: string | null;
        }
      ]
    | [];
};

export type TFlights = {
  compagny: {
    id: string;
    name: string;
  };
  from: {
    airport: string;
    label: string;
  };
  to: {
    airport: string;
    label: string;
  };
  duration: number;
  date: string;
  price: number;
};

export type TCultural = {
  id: string;
  city: string;
  place: string;
  image: string;
};
