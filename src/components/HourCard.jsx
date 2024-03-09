import React from 'react'

function HourCard({ time, data }) {
    const t = new Date(time);
    const timeString = `${t.getHours()}:${t.getMinutes()}`
    const temp = data.temperature;
    return (
        <div className='hour-data'>
            <div>{timeString}</div>
            <div>⛅</div>
            <div>{`${temp.toFixed(1)} °C`}</div>
        </div>
    )
}

export default HourCard;