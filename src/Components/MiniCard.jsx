import React, { useEffect, useState } from "react";
import sun from "../../public/icons/sun.png";
import fog from "../../public/icons/fog.png";
import cloud from "../../public/icons/cloud.png";
import rain from "../../public/icons/rain.png";
import snow from "../../public/icons/snow.png";
import strom from "../../public/icons/storm.png";
import windy from "../../public/icons/windy.png";
import partially from "../../public/icons/partially.png"
import overcast from "../../public/icons/overcast-64.png"


function MiniCard({ time, temp, iconString }) {
  const [icon, setIcon] = useState();
  var options = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric"
};
  useEffect(() => {
    if (iconString) {
      if (iconString?.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString?.toLowerCase().includes("Cloudy")) {
        setIcon(cloud);
      } else if (iconString?.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (
        iconString?.toLowerCase().includes("rain") ||
        iconString?.toLowerCase().includes("shower")
      ) {
        setIcon(rain);
      } else if (iconString?.toLowerCase().includes("Snow")) {
        setIcon(snow);
      } else if (
        iconString?.toLowerCase().includes("thunder") ||
        iconString?.toLowerCase().includes("strom")
      ) {
        setIcon(strom);
      } else if (iconString?.toLowerCase().includes("Sunny")) {
        setIcon(sun);
      } else if (iconString?.toLowerCase().includes("wind")) {
        setIcon(windy);
      } else if (iconString?.toLowerCase().includes("overcast")) {
        setIcon(overcast);
      } else if (iconString?.toLowerCase().includes("partially")) {
        setIcon(partially);
      }
    }
  }, [iconString]);
  return (
    <div className="glassCard md:w-[10rem] sm:w-[9rem] h-[10rem] p-4 flex flex-col">
      <p className="text-center bg-[#9b9a9a] sm:text-[13px] md:text-[15px]">
        {
          new Date(time)
            .toLocaleDateString("en", options)
        }
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        <img src={icon} alt="" className="w-[4rem] h-[4rem]" />
      </div>
      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
}

export default MiniCard;
