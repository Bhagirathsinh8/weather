import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
// import NewsApp from "./NewsApp";


function Wrap() {
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // console.log("API key: " + apiKey);
  const [serachinput, SetSearchInput] = useState("India");
  const [city, setCity] = useState("Rajkot");
  const [temp, setTemp] = useState("73");
  const [feels_like, setFeels_Like] = useState("73");
  const [wind, setWind] = useState("7.3");
  const [cloud, setCloud] = useState("7.3");
  const [weatherDesc, setWeatherDesc] = useState("scattered clouds");
  const [country, setCountry] = useState("IN");
  const [Visibility, setVisibility] = useState("4");
  const [groundlevel, setGroundlevel] = useState("73");
  const [humidity, setHumidity] = useState("73");
  const [gust, setGust] = useState("73");
  const [speed, setSpeed] = useState("73");
  const [sealevel, setSealevel] = useState("73");
  const [pressure, setPressure] = useState("73");
  const [degree, setDegree] = useState("73");
  const [longitude, setLongitude] = useState("-----");
  const [latitude, setLatitude] = useState("-----");
  const [fdata, setFdata] = useState({});

  const handleInput = (e) => {
    SetSearchInput(setCity(e.target.value))
    
  };
useEffect(()=>{
  getData();
 }, [serachinput]);


  const getData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${apiKey}`);
    const data = await response.json();
    console.log("Get Data");
    console.log(data);
    setData(data);
  

  };

  function setData(data) {
  
    setTemp(data.main.temp);
    setFeels_Like(data.main.feels_like);
    setWind(data.wind.speed);
    setCloud(data.clouds.all);
    setWeatherDesc(data.weather[0].description);
    setCountry(data.sys.country);
    setVisibility(data.visibility);
    setLatitude(data.coord.lat);
    setLongitude(data.coord.lon);
    setGroundlevel(data.main.grnd_level);
    setHumidity(data.main.humidity);
    setGust(data.wind.gust);
    setSpeed(data.wind.speed);
    setSealevel(data.main.sea_level);
    setPressure(data.main.pressure);
    setDegree(data.wind.deg);
  }

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }

  const handleForm = (e) => {
    e.preventDefault();
    // getData();
  };
  

  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-blue-100  to-blue-400 h-full w-full top-0 left-0 text-white">
          <div
            className="max-w-l mx-auto mt-1 rounded-xl shadow-lg p-12 bg-black bg-opacity-80 relative"
            style={{ width: "1500px", height: "auto" }}
          >
            {/* <!-- Header --> */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-left">
                <h1 className="text-2xl font-bold flex items-center align-text-bottom mx-5">
                  The <span className="text-cyan-400">Weather</span> Forecasting
                </h1>
              </div>
              <div className="text-right text-sm">{getDate()}</div>
            </div>

            {/* <!-- Search Bar --> */}
            <form onSubmit={handleForm}>
              <div className="relative mb-6 flex flex-row">
                <input
                  type="text"
                  className="w-11/12 py-2 pl-1 pr-2 rounded-lg text-black"
                  placeholder="India , IN"
                  value={city}
                  onChange={handleInput}
                />
                <button>
                  <SearchIcon
                    className="text-xl pl-2 h-2 m-auto ml-4 bg-gray-700 rounded-2xl"
                    style={{ width: "150px", height: "35px" }}
                    onClick={getData}
                  />
                </button>
              </div>
            </form>
            {/* <!-- Main Section --> */}
            <div className="grid grid-cols-2 gap-4">
              {/* <!-- Left Section --> */}
              <div>
                {/* <!-- Current Weather --> */}
                <div className="mb-6">
                  <h2 className="font-bold">CURRENT WEATHER</h2>
                  <div className="flex items-center mt-2">
                    <div className="text-left">
                      <h3 className="text-xl font-bold">
                        {city.toUpperCase()},{country}
                      </h3>
                      <h4>
                        Latitude : {latitude} | Longitude : {longitude}
                      </h4>
                      <p className="text-sm">Today {getDate()}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <h3 className="text-xl font-bold">{temp}°C</h3>
                      <p className="text-sm">{weatherDesc}</p>
                    </div>
                    <i className="fas fa-cloud-sun text-4xl ml-4"></i>
                  </div>
                </div>

                {/* <!-- Weather Conditions --> */}
                <div className="mb-6">
                  <h2 className="font-bold">Current Data</h2>
                  <div className="grid grid-cols-4 gap-4 mt-2 text-center">
                    <div>
                      <i className="fas fa-thermometer-half text-xl"></i>
                      <p>Real Feel</p>
                      <p className="font-bold">{feels_like}°C</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-droplet"></i>
                      <p>Humidity</p>
                      <p className="font-bold">{humidity}</p>
                    </div>
                    <div>
                      <i className="fas fa-cloud text-xl"></i>
                      <p>Clouds</p>
                      <p className="font-bold">{cloud}%</p>
                    </div>
                    <div>
                      <i className="fas fa-tint text-xl"></i>
                      <p>Visibility</p>
                      <p className="font-bold">{Visibility / 100} KM/H</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                      <p>Ground Level</p>
                      <p className="font-bold">{groundlevel}</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-water"></i>
                      <p>Sea Level</p>
                      <p className="font-bold">{sealevel}</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-water"></i>
                      <p>Pressure</p>
                      <p className="font-bold">{pressure}</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-water"></i>
                      <p>Sea Level</p>
                      <p className="font-bold">{sealevel}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="font-bold">Current Wind Data</h2>
                  <div className="grid grid-cols-4 gap-4 mt-2 text-center">
                    <div>
                      <i className="fa-solid fa-wind"></i>
                      <p>Wind</p>
                      <p className="font-bold">{wind} m/s</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-gauge"></i>
                      <p>Speed</p>
                      <p className="font-bold">{speed} KM/H</p>
                    </div>
                    <div>
                      <i className="fa-sharp-duotone fa-solid fa-wind"></i>
                      <p>Gust</p>
                      <p className="font-bold">{gust ? gust : "-"}%</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-notch"></i>
                      <p>Degree</p>
                      <p className="font-bold">{degree} θ</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Today's Forecast --> */}
                <div>
                  <h2 className="font-bold">
                    TODAY'S FORECAST
                    <span className="text-red-600">
                     
                      &#160; * Coming Soon *
                    </span>
                  </h2>
                  <p className="text-sm">3 available forecasts</p>
                  <div className="grid grid-cols-3 gap-4 mt-15">
                    <div className="text-center bg-blue-700 bg-opacity-50 rounded-lg py-4">
                      <i className="fas fa-cloud-sun text-2xl"></i>
                      <p className="mt-2">15:00</p>
                      <p className="font-bold mt-1">23°C</p>
                    </div>
                    <div className="text-center bg-blue-700 bg-opacity-50 rounded-lg py-4">
                      <i className="fas fa-cloud-sun text-2xl"></i>
                      <p className="mt-2">18:00</p>
                      <p className="font-bold mt-1">23°C</p>
                    </div>
                    <div className="text-center bg-blue-700 bg-opacity-50 rounded-lg py-4">
                      <i className="fas fa-cloud-sun text-2xl"></i>
                      <p className="mt-2">21:00</p>
                      <p className="font-bold mt-1">19°C</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Right Section --> */}
              <div>
                {/* <!-- Weekly Forecast --> */}

                <h2 className="font-bold ">
                  WEEKLY FORECAST
                  <span className="text-red-600"> &#160; * Coming Soon *</span>
                </h2>
                <div className="mt-5">
                  
                  
                  <div className="grid grid-cols-4 gap-4 items-center bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="font-bold">Thursday</p>
                    <i className="fas fa-sun text-xl"></i>
                    <p>21°C</p>
                    <p className="text-right">3.58 m/s</p>
                  </div>
                 
                  <div className="grid grid-cols-4 gap-4 items-center  bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="font-bold">Friday</p>
                    <i className="fas fa-cloud text-xl"></i>
                    <p>21°C</p>
                    <p className="text-right">1.92 m/s</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center  bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="font-bold">Saturday</p>
                    <i className="fas fa-cloud text-xl"></i>
                    <p>21°C</p>
                    <p className="text-right">2.75 m/s</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center  bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="font-bold">Sunday</p>
                    <i className="fas fa-sun text-xl"></i>
                    <p>23°C</p>
                    <p className="text-right">1.99 m/s</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center  bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="font-bold">Monday</p>
                    <i className="fas fa-cloud-sun text-xl"></i>
                    <p>23°C</p>
                    <p className="text-right">2.86 m/s</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center  bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-5">
                    <p className="font-bold">Tuesday</p>
                    <i className="fas fa-sun text-xl"></i>
                    <p>23°C</p>
                    <p className="text-right">1.99 m/s</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center  bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="font-bold">Tuesday</p>
                    <i className="fas fa-sun text-xl"></i>
                    <p>23°C</p>
                    <p className="text-right">1.99 m/s</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center  bg-cyan-400 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="font-bold">Tuesday</p>
                    <i className="fas fa-sun text-xl"></i>
                    <p>23°C</p>
                    <p className="text-right">1.99 m/s</p>
                  </div>.
                </div>
              </div>
            </div>

            {/* <!-- GitHub Icon --> */}
            <div className="absolute top-4 right-4">
              {/* <i className="fab fa-github text-2xl"></i> */}
              <GitHubIcon />
            </div>
          </div>
        </div>
        <div
          className=" bg-blue-400 h-full w-full mr-0 p-3"
          style={{ height: "auto", width: "auto" }}
        >
          {/* <NewsApp /> */}
          
        </div>
      </div>
    </>
  );
}
export default Wrap;
