import { TTravel } from "./travel.spec";

export type TUser = {
  email: string;
  name: string;
  phone: string;
  bearerToken: string;
  favourites: TUserFavourites;
  criterias: TUserCriterias;
};

export type TUserFavourites = TTravel[] | [];

export type TUserCriterias = {
  departureDate: string | null;
  returnDate: string | null;
  departureCity: string | null;
  passengers: number | null;
  destination: string | null;
  budget: number | null;
};

export type TTravelParams = {
  nbPassagers: string | null;
  priceRange: string | null;
  departurePlace: string | null;
  startDate: string | null;
  endDate: string | null;
  nbStopovers: string | null;
  duration: string | null;
};