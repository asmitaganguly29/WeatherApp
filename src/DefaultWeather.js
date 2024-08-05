import { useEffect, useState } from "react";

function DefaultWeather()
{
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() =>{
        getLatLong()
    }, [])

    const getLatLong = () =>{

        const result = fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
        const data1 = result.json();

    }

    return(
        <div class="Home">

        </div>
    )
}
export default DefaultWeather