import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. As soon as the app is launched, the locatioon-based weather is displayed
// 2. Show the weather condition of the city in Celsius and Fahenheit at the same time
// 3. five buttons (one is current location, the other four are different cities)
// 4. Each time the city button is clicked, the weather for that city is displayed.
// 5. When the current location-based weather button is clicked, the weather based on the current location is displayed again.
// 6. A loading spinner appears while the data is being fetched
function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('');
  const cities = ['Seoul', 'New York', 'Paris', 'Sydney']
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
      // console.log("현재 위치", weather_api)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
    console.log("data", data)
  }
  const getWeatherByCity= async()=>{
    let apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setCity(data)
    console.log(data)
  }
  
  useEffect(()=>{
    getCurrentLocation()
  },[])

  useEffect(()=>{
    console.log("city??", city)
    // getWeatherByCity()
  },[city])

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity}/>
      </div>
    </div>
  );
}

export default App;
