import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AgChartsReact } from 'ag-charts-react';
import { prepareChartData } from '../utils';

function TemperatureInfo() {
  const [frequency, setFrequency] = useState('daily');//minutely, hourly
  const timelinesData = useSelector(state => state.weather?.timelines);
  const preparedChartData = timelinesData? prepareChartData(frequency, timelinesData[frequency]) : [];
  
  const chartOptions = {
    data: preparedChartData,
    series: [{ type: 'area', xKey: 'time', yKey: 'temp', yName: 'Avg. Temperature', fill: '#FF8900' }]
  }
  
  const handleFreqChange = (e) => {
    setFrequency(e.target.value);
  }

  return (
    <div className='temperature-container'>
      <div className='temperature-header'>
        <h3>Temperature</h3>
        <select name="frequency" onChange={handleFreqChange}>
          <option value="daily">Daily</option>
          <option value="hourly">Hourly</option>
          <option value="minutely">Minutely</option>
        </select>
      </div>
      <div className='temperature-chart'>
        <AgChartsReact options={chartOptions} />
      </div>
    </div>
  )
}

export default TemperatureInfo