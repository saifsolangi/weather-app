import React, { useState } from "react";
import axios from "axios";


function App() {




  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c8d707729d3a6a4c2dd049e2b73a9c5f`;

  const searchLocation = (event) => {

    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      }).catch((err) => {
        alert("Enter Correct Location Please", err)
      })
    }

  }

  return (
    <div className="text-white bg-[url('./asset/sunset.jpg')] h-screen bg-cover bg-repeat bg-center flex flex-col items-center justify-between py-9">

      <input type="text"
        placeholder="Enter Location...." className="px-4 py-2 rounded-lg text-black"
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation} />

      <div>
        <p>{data.name}</p>
        {data.main ? <h1 className="text-5xl font-bold"> {data.main.temp}°F </h1> : null}
        <p >{data.weather[0].description}</p>
      </div>

      <div className="flex gap-6 bg-slate-600 p-5 rounded-lg bg-opacity-90 ">
        <div className="flex items-center justify-center flex-col">
          {data.main ? <p className="text-2xl font-bold"> {data.main.temp}°F </p> : null}
          <p>Feels Like</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-2xl font-bold">{data.main.humidity}</p>
          <p>Humidity</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-2xl font-bold">{data.wind.speed}</p>
          <p>Wind Speed</p>
        </div>
      </div>

    </div>
  );
}

export default App;
