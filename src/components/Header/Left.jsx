import React from 'react'
import Logo from './Logo'
import WeatherName from './WeatherName'

function Left({className, name, temp, description, counrty, timezone}) {
  return (
    <div className={className}>
      <Logo />
      <WeatherName name={name} temp={temp} description={description} counrty={counrty} timezone={timezone} />
    </div>
  )
}

export default Left
