import React from 'react';
import { useSelector } from 'react-redux';

function LocationInfo() {
  const dateString = useSelector(state => state.weather?.weather?.timelines.hourly[0].time)
  const currDate = new Date(dateString);
  return (
    <div className='location-container'>
      <div className='location-details'>
        <h2>New York, United States</h2>
        <p>{currDate.toDateString()}</p>
        <p>Cloudy</p>
      </div>
      <div className='location-img'>
        {/* <img src="https://images.unsplash.com/photo-1527267207156-3372670819dc" alt="Newyork-img" width="400" height="400"/> */}
        <div className='live'>LIVE</div>
      </div>
    </div>
  )
}

export default LocationInfo