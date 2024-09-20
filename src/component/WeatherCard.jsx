import React from "react";
import rain from '../assets/cloudy-day.png'
import sunny from '../assets/sunny-day.png'
function WeatherCard() {
  return (
    <div className="weather-card">
       <h1>Current Weather</h1>
        <div className="weather-cards">
     
          <div className="card" >
          <img src={rain} alt="Weather Icon" /> 
          <h2>Grambling, Louisiana</h2>
          </div>
          <div className="card">
          <img src={sunny} alt="Weather Icon" />
          <h3>22°C</h3>
          </div>
          <div className="card">
          <img src={sunny} alt="Weather Icon" />
          <h2>Sunny with mild winds</h2>
          </div>
          </div>
      
      
    </div>
  );
}

export default WeatherCard;
