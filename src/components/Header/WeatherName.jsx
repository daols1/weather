import React from 'react';
import './WeatherName.css'

function WeatherName({ name, temp, description, counrty, timezone }) {
  return (
    <div className='weathername'>
      <h1 className='deg'>{temp} &#8451;</h1>
      <div className='namedate'>
        <h1 className='name'>{name}, <span>{counrty}</span></h1>
        <p>Time zone: {timezone}</p>
      </div>
      <div className='description'>{description}</div>
    </div>
  )
}

export default WeatherName
