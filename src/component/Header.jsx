import React from "react";
import rain from '../assets/cloudy-day.png'
function Header() {
  return (
    <header className="header">
       <div className="weather-info">
       <img src={rain} alt="Weather Icon" />
       </div>
      <h1>Daily Recommendations</h1>
       
        
    </header>
  );
}

export default Header;
