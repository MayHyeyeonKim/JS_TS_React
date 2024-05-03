import './App.css';
import { useState, useEffect } from 'react';

// 1. As soon as the app is launched, the locatioon-based weather is displayed
// 2. Show the weather condition of the city in Celsius and Fahenheit at the same time
// 3. five buttons (one for current location, four for other city)
// 4. Each time the city button is clicked, the weather for that city is displayed.
// 5. When the current location-based weather button is clicked, the weather basec on the current location is displayed again.
// 6. A loading spinner appears while the data is being fetched
function App() {
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiKey = "Your_API_KEY"
      let weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      console.log("현재 위치", weather_api)
    });
    // console.log("getCurrentLocation");
  }

  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div>
      <p>hihi</p>
    </div>
  );
}

export default App;
