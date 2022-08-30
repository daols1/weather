import React, { useEffect,useState } from 'react';
import './App.css';
import Left from './components/Header/Left';
import Right from './components/Header/Right';

function App() {

  // Api Side

  const [wdata, setWdata] = useState({})

  const API = "62f84860b69bddcd19d34120487d7375"
  // let location = 'london'
  // let s = 'lat=6.604295894886394&lon=3.319366292714161'

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=6.604295894886394&lon=3.319366292714161&appid=${API}&units=metric`)
    .then(response => response.json())
    .then(resp => setWdata(resp))
    .catch(error => console.log(error))
  }, [])
  
  const submitter = (event) => {
    event.preventDefault()
  }

  const handleSubmit = (event) => {
    if (event.key === 'Enter'){
      let value = event.target.value
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}&units=metric`)
        .then(response => response.json())
        .then(resp => setWdata(resp))
        .catch(error => console.log(error))    
    }
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}`)
    //       .then(response => response.json())
    //       .then(resp => setWdata(resp))
    //       .catch(error => console.log(error))
  }

  // const space = ['']

  const handleValue = event => {
    // let value = event.target.value
    // console.log(value)
  }

  // const handle = event => {
  //   if (event.key === 'Enter'){
  //     console.log('event is assigned')
  //     console.log('The mf function works')
  //   }
  // }

  // const loading = 'loading'


  return (
    Object.keys(wdata).length !== 0 ?
    <div className="App">
      <Left className="left" name={wdata.name} counrty={wdata.sys.country} temp={wdata.main.temp} description={wdata.weather[0].description} timezone={wdata.timezone} />
      <Right className="right" humidity={wdata.main.humidity} feelslike={wdata.main.feels_like} rain={wdata.main.pressure} wind={wdata.wind.speed} changer={handleValue} submit={handleSubmit} sman={submitter} />
    </div>
    :
    <div className="App">
      <Left className="left" name='loading..' temp='loading..' description='loading..' />
      <Right className="right" humidity='loading..' feelslike='loading..' rain='loading..' wind='loading..' changer='loading..' submit='loading..' sman='loading..' />
    </div>
  );
}

export default App;
