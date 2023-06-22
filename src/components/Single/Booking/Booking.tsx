import { Fragment } from "react";
import { useUserStore } from "../../../store/useUserStore";
import CardBooking from "../../Card/Booking/CardBooking";

import "./Booking.scss";

export default function Booking() {
  const { userCriterias } = useUserStore();

  return (
    <Fragment>
      <div className="booking__filters flex justify-center gap-1.5 w-full">
        <a
          href="/passengers"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Voyageurs</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.passengers! || 2}
          </p>
        </a>

        <a
          href="/price"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Budget</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            &lt; {userCriterias?.budget! || "250"} €
          </p>
        </a>

        <a
          href="/destination"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Destination</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.destination! || "-"}
          </p>
        </a>

        <a
          href="/travel-date"
          className="booking__filter bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Date</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.departureDate!}
          </p>
        </a>
      </div>

      <div className="outward">
        <h2 className="outward__title">Choisissez votre aller</h2>

        <div className="outward__cards">
          <CardBooking />
          <CardBooking />
          {/* <CardBooking /> */}
          {/* <CardBooking /> */}
          {/* <CardBooking /> */}
        </div>
      </div>
    </Fragment>
  );
}
