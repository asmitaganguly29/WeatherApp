import { useEffect, useState } from "react";

function WeatherForecast()
{
    const [city, setCity] = useState('')
    const [weatherimage, setWeatherimage] = useState('')
    const [display, setDisplay] = useState('')
    const [temperature, setTemp] = useState('')
    const [humidity, setHumidity] = useState('')
    const [windspeed, setWindspeed] = useState('')
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    useEffect(() =>{
        getLatLong();
        findCurrentWeather();
    }, [])

    const getLatLong = async() =>{

        if (navigator.geolocation) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
              },
              (error) => {
                console.error('Error getting location:', error);
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
          }


          
    }

    const findCurrentWeather = async() =>{
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=da2760bdda059f6e6d1941e98044c005&units=metric")
            const data = await response.json();

            console.log(47,data)

            console.log("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=da2760bdda059f6e6d1941e98044c005&units=metric")
            
            setTemp(data.main.temp+'°C')  //temperature

            if(data.weather[0].main == 'Clouds')
            {
                setWeatherimage('images/clouds.png')
            }

            else if(data.weather[0].main == 'Clear')
            {
                setWeatherimage('images/clear.png')
            }

            else if(data.weather[0].main == 'Drizzle')
            {
                setWeatherimage('images/drizzle.png')
            }

            else if(data.weather[0].main == 'Humidity')
            {
                setWeatherimage('images/humidity.png')
            }

            else if(data.weather[0].main == 'Mist')
            {
                setWeatherimage('images/mist.png')
            }

            else if(data.weather[0].main == 'Rain')
            {
                setWeatherimage('images/rain.png')
            }

            else if(data.weather[0].main == 'Clear')
            {
                setWeatherimage('images/clear.png')
            }

            else if(data.weather[0].main == 'Snow')
            {
                setWeatherimage('images/snow.png')
            }

            else if(data.weather[0].main == 'Wind')
            {
                setWeatherimage('images/wind.png')
            }

            else if(data.weather[0].main == 'Haze')
            {
                setWeatherimage('images/haze')
            }
            
           setHumidity('Humidity : ' + data.main.humidity+'%')  //humidity
           setWindspeed('Wind Speed : ' + data.wind.speed+'km/h') //windspeed
            setCity(data.name)
    }

    const check = async () =>
        {
           
           

           //when we are fetching the api url after hitting the line below it will take some time but the next line will also get hit and 
           //start working immediately, so it will not get the proper value because fetching takes some time.So, we will add await and when we
           //are adding await we need to write 'async' in the function
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=da2760bdda059f6e6d1941e98044c005&units=metric")
            const data = await response.json();
            
            setTemp(data.main.temp+'°C')  //temperature

            if(data.weather[0].main == 'Clouds')
            {
                setWeatherimage('images/clouds.png')
            }

            else if(data.weather[0].main == 'Clear')
            {
                setWeatherimage('images/clear.png')
            }

            else if(data.weather[0].main == 'Drizzle')
            {
                setWeatherimage('images/drizzle.png')
            }

            else if(data.weather[0].main == 'Humidity')
            {
                setWeatherimage('images/humidity.png')
            }

            else if(data.weather[0].main == 'Mist')
            {
                setWeatherimage('images/mist.png')
            }

            else if(data.weather[0].main == 'Rain')
            {
                setWeatherimage('images/rain.png')
            }

            else if(data.weather[0].main == 'Clear')
            {
                setWeatherimage('images/clear.png')
            }

            else if(data.weather[0].main == 'Snow')
            {
                setWeatherimage('images/snow.png')
            }

            else if(data.weather[0].main == 'Wind')
            {
                setWeatherimage('images/wind.png')
            }

            else if(data.weather[0].main == 'Haze')
            {
                setWeatherimage('images/haze')
            }
            
           setHumidity('Humidity : ' + data.main.humidity+'%')  //humidity
           setWindspeed('Wind Speed : ' + data.wind.speed+'km/h') //windspeed
        
           
        }
    return(
         <div class="home">
<div class="search">
    <input type='text' onChange={(e) => setCity(e.target.value)} placeholder="Enter City"></input>
    <button id="search_icon" onClick={check}>
        Search
    </button>
</div>
<div class="weather">
    <img src={weatherimage}></img>
    <h1 class="temp">{temperature}</h1>
        <h2 class="city">{city}</h2>
</div>
<div class="details">
    <div class="">
        <img src="images/humidity.png"></img>
        <div>
            <p><b>{humidity}</b></p>
        </div>
    </div>

    <div class="Windspeed">
    <img src="images/wind.png"></img>
        <div>
            <p><b>{windspeed}</b></p>
        </div>
    </div>
</div>

        {latitude} and {longitude}

         </div>
 
    )
}
export default WeatherForecast