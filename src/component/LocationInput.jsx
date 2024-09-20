import React, { useState } from "react";

function LocationInput() {
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLocationDetect = () => {
    alert("Auto-detecting location...");
  };

  return (
    <div className="location-input-container">
      <input
        className="fancy-input"
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={handleInputChange}
      />
      <button className="fancy-button" onClick={handleLocationDetect}>
        Use My Location
      </button>
    </div>
  );
}

export default LocationInput;
