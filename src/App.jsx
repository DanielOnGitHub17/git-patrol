import './App.css';
import Header from "./component/Header";
import LocationInput from "./component/LocationInput";
import WeatherCard from "./component//WeatherCard";
import Recommendations from "./component/Recommendations"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <LocationInput />
        <div className="main-content">
           <WeatherCard />
           </div>
        <div className="main-content">
       
          <Recommendations />
        </div>
      
      </div>
    </div>
  );
}

export default App;
