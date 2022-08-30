import React from 'react';
import Search from './Search';
import Suggest from './Suggest';
import WeatherDetails from './WeatherDetails';


function Right({className, humidity, feelslike, rain, wind, changer, submit, sman}) {
  return (
    <div className={className}>
      <Search changer={changer} submit={submit} sman={sman} />
      <Suggest />
      <WeatherDetails humidity={humidity} feelslike={feelslike} rain={rain} wind={wind} />
    </div>
  )
}

export default Right
