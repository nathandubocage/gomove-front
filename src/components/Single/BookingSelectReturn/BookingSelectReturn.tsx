import { useLocation } from "react-router-dom";

import { TTravel } from "../../../types/travel.spec";

import "./BookingSelectReturn.scss";

export default function BookingSelectReturn() {
  const location = useLocation();
  const travel: TTravel = location.state.travel;

  return <></>;
}
