import React from 'react';
import './WeatherDetails.css'

function WeatherDetails({humidity, feelslike, rain, wind}) {
  return (
    <div className='details'>
        <div className='detailshead'>WeatherDetails</div>
        <li>Humidity: {humidity} </li>
        <li>Feelslike: {feelslike}  </li>
        <li>Pressure: {rain} </li>
        <li>Wind speed: {wind}</li>
    </div>

  )
}

export default WeatherDetails