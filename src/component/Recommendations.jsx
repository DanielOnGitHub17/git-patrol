import React,{useState, useEffect} from "react";
function Recommendations() {
  const handleOutfitClick = () => {
    alert('Outfit of the Day clicked!');
  };

  const handleActivityClick = () => {
    alert('Activity Suggestions clicked!');
  };
  const [outfitImage, setOutfitImage] = useState('');
  const [activityImage, setActivityImage] = useState('');

  useEffect(() => {
    fetchRandomImages();
  }, []);
  const fetchRandomImages = () => {
    const randomOutfitImage = 'https://picsum.photos/200/300'; 
    const randomActivityImage = 'https://picsum.photos/200/300'; 

    setOutfitImage(randomOutfitImage);
    setActivityImage(randomActivityImage);
  };
  return (
    <div className="recommendations">
      <h2>Recommendations</h2>
      <div className="cards">
          <div className="card" onClick={handleOutfitClick}>
          <img src={outfitImage} alt="Outfit" /> 
            <h3>Outfit of the Day</h3>
            <p>Based on the weather</p>
          </div>
          <div className="card" onClick={handleActivityClick}>
          <img src={activityImage} alt="Activity" />
            <h3>Activity Suggestions</h3>
            <p>Based on the weather</p>
          </div>
        </div>
   
    </div>
  );
}

export default Recommendations;
