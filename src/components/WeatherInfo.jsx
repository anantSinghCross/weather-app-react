import React from 'react'
import { useSelector } from 'react-redux'
import HourCard from './HourCard';

function WeatherInfo() {
  const hourlyData = useSelector(state => state.weather?.weather.timelines.hourly);

  const hourList = hourlyData.map(item => {
    return <HourCard key={item.time} time={item.time} data={item.values} />
  })

  return (
    <div className='weather-container'>
      <div className='weather-hourly-container'>
        {hourList}
      </div>
    </div>
  )
}

export default WeatherInfo