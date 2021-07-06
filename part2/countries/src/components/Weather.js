import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Weather = ({capital}) => {

    const [ weatherData, setWeatherData ] = useState({})
    const api_key = process.env.REACT_APP_API_KEY
    const query=`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
  
    useEffect(()=>{
      axios
        .get(query)
        .then(response => {
          populateWeatherInfo(response.data)
        })
    },[])
  
    const populateWeatherInfo = ({current}) => {
      if(!current){
        return
      }
      setWeatherData({
        temperature: current.temperature,
        iconURL: current.weather_icons[0],
        windSpeed: current.wind_speed,
        windDirection: current.wind_dir
      })
    }
  
    return (
      <div>
        <div><b>temperature:</b> {weatherData.temperature}</div>
        <img style={{width : '50px'}} src={weatherData.iconURL} alt={capital}></img>
        <div><b>wind:</b> {weatherData.windSpeed} mph direction {weatherData.windDirection} </div>
      </div>
    ) 
  }

  export default Weather;