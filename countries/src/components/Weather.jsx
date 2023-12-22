import { fromKelvinToCelsius } from '../helpers/converter'

const Weather = ({ weather }) => {
    if (weather === undefined) return
    const temperature = fromKelvinToCelsius(weather.main.temp)
    return (
        <>

            <h2>{`Weather in ${weather.name}`}</h2>
            <p>{`temperature: ${temperature} Celsius`}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`Weather in ${weather.name}`} />
            <p>{`wind: ${weather.wind.speed} m/s`}</p>
        </>
    )
}

export default Weather