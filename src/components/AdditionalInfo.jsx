import React from 'react'
import { useSelector } from 'react-redux'

function AdditionalInfo() {
  const additionalData = useSelector(state => state.weather?.weather?.timelines.daily[0].values);
  const { precipitationProbabilityAvg, windSpeedAvg, humidityAvg } = additionalData;
  return (
    <div className='additional-container'>
      <div>
        <h3>Additional Info</h3>
      </div>
      <div className='additional-details'>
        <div>
          <p>Precipitation</p>
          <p>{precipitationProbabilityAvg}%</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{humidityAvg}%</p>
        </div>
        <div>
          <p>Windy</p>
          <p>{windSpeedAvg} km/h</p>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfo