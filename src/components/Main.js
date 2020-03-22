import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Main() {
    const [data, setData] = useState({});
    useEffect(() => {
        function fetchData() {
            axios('https://api.aerisapi.com/observations/seattle,wa?client_id=HIyat66xz5Uue87sjXrNN&client_secret=7XWB2MGrpconeIvx34PzubV2NkSHRHrBk7Wy4cLV')
            .then(success => setData({
                weather: success.data.response.ob.weather,
                temperature: success.data.response.ob.tempF
            }))
            .catch(err => console.log(err))
        }
        fetchData();
    }, []);
    return (
        <ul>
            <h1>The current weather in Seattle is {data.weather && data.weather.toLowerCase()} with a temperature of {data && data.temperature} &deg;F</h1>
        </ul>
    );
}

export default Main;
