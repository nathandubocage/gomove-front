import menuIcon from "../../assets/icons/menu.svg";
import { useUserStore } from "../../store/useUserStore";
import "./TravelsHeader.scss";

export default function TravelsHeader() {
  const { userCriterias } = useUserStore();
  
  return (
    <div className="absolute w-full px-4 py-12 flex flex-col items-start gap-2">
      <div className="flex justify-center gap-1.5 w-full">
        <a
          href="/passengers"
          className="bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Voyageurs</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.passengers! || 2}
          </p>
        </a>

        <a
          href="/price"
          className="bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Budget</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            &lt; {userCriterias?.budget! || "250"} €
          </p>
        </a>

        <a
          href="/destination"
          className="bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Destination</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.destination! || "-"}
          </p>
        </a>

        <a
          href="/travel-date"
          className="bg-[rgba(255,255,255,.8)] px-2 py-1 rounded font-space-grotesk grow"
        >
          <p className="text-[#594D62] text-[10px]">Date</p>
          <p className="text-[#30213B] text-[14px] font-bold">
            {userCriterias?.departureDate!}
          </p>
        </a>
      </div>
      <a href="/account" className="menu-button">
        <img src={menuIcon} alt="Modifier" />
      </a>
    </div>
  );
}
