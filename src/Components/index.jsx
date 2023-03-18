import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import {ReactComponent as IconCloud} from '../Components/svgs/iconcloud.svg'


function Weather ()  {

const[searchValue, setSearchValue] = useState('')
const [weatherData, setWeatherData] = useState('');


const API_KEY = '2e2068fa90a1d40ed0323c0d68d24851';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const handleSearch = () => {
    axios
      .get(API_URL, {
        params: {
          q: searchValue,
          appid: API_KEY,
          units: 'metric'
        }
      })
      .then((response) => {
        setWeatherData(response.data)
        // handle search results
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (

        <div className="container-weather">
            <input type="text" placeholder='Enter your location' value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p><IconCloud width="40px" heigth="40px"/></p>
                    <p>{weatherData.weather.description}</p>
                    <p> {weatherData.main.temp} &#8451;</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed:{weatherData.wind.speed}m/s </p>
                    <p>Cloudiness:{weatherData.clouds.all}%</p>
                    
                </div>
            )}
            
        </div>
        

  )
}

export default Weather