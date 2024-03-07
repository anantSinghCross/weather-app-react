import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWeatherData } from "./store/weatherSlice"
import Header from "./components/Header"
import LocationInfo from "./components/LocationInfo"
import WeatherInfo from "./components/WeatherInfo"
import AdditionalInfo from "./components/AdditionalInfo"
import TemperatureInfo from "./components/TemperatureInfo"


function App() {
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather);

  useEffect(() => {
    // dispatch(fetchWeatherData())
  }, [])
  
  return (
    <div className="layout">
      <Header/>
      <LocationInfo/>
      <WeatherInfo/>
      <AdditionalInfo/>
      <TemperatureInfo/>
    </div>
  )
}

export default App
