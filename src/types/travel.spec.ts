export type TTravelParams = {
  nbPassagers: string | null;
  priceRange: string | null;
  departurePlace: string | null;
  startDate: string | null;
  endDate: string | null;
  nbStopovers: string | null;
};

export type TTravel = {
  id: string;
  destination: {
    city: string;
    country: string;
    image: string;
    distance: string;
  };
  date: {
    start: string;
    end: string;
  };
  transport: [
    {
      price: number;
      company: string;
      airport: string;
    }
  ];
};
