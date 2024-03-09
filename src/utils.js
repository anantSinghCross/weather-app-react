export function prepareChartData(freq, data){
    let chartData = [];
    if (freq === 'minutely' || freq === 'hourly'){
        chartData = data.map(dataPoint => {
            const d = new Date(dataPoint.time);
            const timeString = `${d.getHours()}:${d.getMinutes()}`;
            return {
                time: timeString,
                temp: dataPoint.values.temperature
            }
        });
    }
    else if (freq === 'daily'){
        chartData = data.map(dataPoint => {
            const d = new Date(dataPoint.time);
            const timeString = `${d.toDateString()}`;
            return {
                time: timeString,
                temp: dataPoint.values.temperatureAvg
            }
        });
    }
    return chartData;
}