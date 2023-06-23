import sunnyIcon from "../../../assets/icons/weather/sunny.svg";
import cloudyIcon from "../../../assets/icons/weather/cloudy.svg";
import rainyIcon from "../../../assets/icons/weather/rainy.svg";

import "./City.scss";
import Button from "../../Button/Button";
import { TTravel } from "../../../types/travel.spec";
import { useEffect, useState } from "react";

interface WeatherData {
  location: {
    values: Array<{
      datetime: string;
      temp: number;
    }>;
  };
}

interface MonthlyData {
  [key: string]: {
    temp: number;
    count: number;
  };
}

export default function City(travel: TTravel) {
  // const [monthlyData, setMonthlyData] = useState<Array<number | undefined>>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const city = "Paris";
  //     const start_date = "2022-01-01";
  //     const end_date = "2022-12-31";
  //     const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=${start_date}T00%3A00%3A00&endDateTime=${end_date}T00%3A00%3A00&contentType=json&unitGroup=metric&locationMode=single&key=REWWGFL82XRDNFZ8USPSMUKNN&dataElements=default&locations=${city}`;

  //     const response = await fetch(url);
  //     const jsonData: WeatherData = await response.json();

  //     const monthData: MonthlyData = {};

  //     console.log(jsonData);

  //     jsonData.location.values.forEach((data) => {
  //       const month = new Date(data.datetime).getMonth();
  //       if (!monthData[month]) {
  //         monthData[month] = { temp: 0, count: 0 };
  //       }
  //       monthData[month].temp += data.temp;
  //       monthData[month].count += 1;
  //     });

  //     const monthlyAverage: Array<number | undefined> = [];
  //     for (const month in monthData) {
  //       monthlyAverage[parseInt(month)] =
  //         monthData[month].temp / monthData[month].count;
  //     }

  //     setMonthlyData(monthlyAverage);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="flex flex-col gap-6 mb-12">
        <div className="grid grid-rows-9 grid-cols-4 border-[#D6D3D8] border rounded-md p-2 font-space-grotesk">
          <h3 className="col-span-4 font-bold text-[#30213B] text-xl">Météo</h3>
          <p className="col-span-4 text-right text-xs text-[#594D62] font-bold mb-2">
            Min / Max °C
          </p>
          <p className="text-sm text-[#30213B] flex items-center">Juin</p>
          <div className="col-span-3 flex gap-4 justify-end text-sm">
            <p className="flex items-center">19°/32°C</p>{" "}
            <img src={sunnyIcon} alt="Ensoleillé icône" />
          </div>
          <hr className="col-span-4" />
          <p className="text-sm text-[#30213B] flex items-center">Juillet</p>
          <div className="col-span-3 flex gap-4 justify-end text-sm">
            <p className="flex items-center">20°/29°C</p>{" "}
            <img src={cloudyIcon} alt="Nuageux icône" />
          </div>
          <hr className="col-span-4" />
          <p className="text-sm text-[#30213B] flex items-center">Août</p>
          <div className="col-span-3 flex gap-4 justify-end text-sm">
            <p className="flex items-center">16°/27°C</p>{" "}
            <img src={rainyIcon} alt="Pluvieux icône" />
          </div>
          <hr className="col-span-4" />
          <p className="text-sm text-[#30213B] flex items-center">Septembre</p>
          <div className="col-span-3 flex gap-4 justify-end text-sm">
            <p className="flex items-center">19°/34°C</p>{" "}
            <img src={sunnyIcon} alt="Ensoleillé icône" />
          </div>
        </div>
        <div className="grid grid-rows-9 grid-cols-4 border-[#D6D3D8] border rounded-md p-2 font-space-grotesk">
          <h3 className="col-span-4 font-bold text-[#30213B] text-xl">
            Hébergement
          </h3>
          <p className="col-span-4 text-center text-lg my-6 text-[#273B7D] font-bold mb-2 font-sans">
            Booking.com
          </p>
          <p className="col-span-4 text-left text-sm my-6 text-[#30213B]">
            Consultez les offres d'hébergement à Berlin du
            <span className="font-bold">&nbsp;{travel.date.start}</span> au
            <span className="font-bold">&nbsp;{travel.date.end}</span>
          </p>
          <div className="h-1/4  col-span-4 px-12">
            <a
              className="w-full flex flex-col"
              target={"_blank"}
              href={`https://www.booking.com/searchresults.fr.html?ss=${travel.destination.city}+${travel.destination.country}&lang=fr&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&checkin=${travel.date.start}&checkout=${travel.date.end}&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure`}
            >
              <Button content="Consulter les offres" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
