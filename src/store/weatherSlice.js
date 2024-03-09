import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

const fetchWeatherData = createAsyncThunk('weather', async() => {
    const res = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=FDH0gNkjXkJguJ5IjTFYa5r4bX0uVJ7u');
    return await res.json();
});


export { fetchWeatherData };
export default weatherSlice;