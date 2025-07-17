import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CiSearch } from "react-icons/ci";

import "./App.css";
import { useStateContext } from "./Context/Index";
import BackgroundLayout from "./Components/BackgroundLayout";
import WeatherCard from "./Components/WeatherCard";
import MiniCard from "./Components/MiniCard";
import cloud from '../public/icons/clouds.png'

function App() {
  const [input, setinput] = useState("");

  const { weather, location, values, place, setplace } = useStateContext();

  console.log(weather);

  const Submit = () => {
    setplace(input);
    setinput("");
  };
  return (
    <>
      <div className="w-full h-screen text-white px-8">
        <nav className="p-3 flex sm:flex-col md:flex-row items-center justify-between gap-3">
          <div className="sm:w-full flex items-center sm:justify-center md:justify-start ">
            <h1 className="text-3xl font-bold sm:text-1xl sm:text-center md:text-left">
              Weather App 
            </h1>
            <div >

              {location ? <img src={cloud} alt="" />:''}
            </div>
          </div>

          <div className="sm:w-full md:w-[15rem]">
            <div className="bg-white overflow-hidden shadow-2xl  rounded flex items-center p-2 gap-2">
              <div>
                <CiSearch className="text-black text-2xl" />
              </div>
              <input
                onKeyUp={(e) => {
                  if (e.key == "Enter") {
                    Submit();
                  }
                }}
                value={input}
                onChange={(e) => {
                  setinput(e.target.value);
                }}
                type="text"
                className="focus:outline-none w-full text-[#212121] text-lg"
                name=""
                id=""
              />
            </div>
          </div>
        </nav>
        <BackgroundLayout></BackgroundLayout>
        <main className="flex sm:flex-col md:flex-row gap-5 py-4 px-[2%] items-center justify-center">
          <div>
           {weather ?  <WeatherCard
              location={location}
              windspeed={weather.wspd}
              humidity={weather.humidity}
              temprature={weather.temp}
              heatindex={weather.heatindex}
              iconstring={weather.conditions}
              conditions={weather.conditions}
            />:''}
          </div>

          <div className="flex justify-center gap-5  flex-wrap">
            {values?.slice(1, 7).map((curr) => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
