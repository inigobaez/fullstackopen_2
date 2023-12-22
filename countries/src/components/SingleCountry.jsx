import Weather from "./Weather";

const SingleCountry = ({ country }) => {
    const flagStyle = {
        width: 150,
        heigth: 'auto'
    }
    if (country === null) return null;

    const languages = Object.values(country.languages);

    return (
        <>
            <h1>{country.name.common}</h1>
            <p>{`capital ${country.capital[0]}`}</p>
            <p>{`area ${country.area}`}</p>
            <strong>languages</strong>
            <ul>
                {languages.map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={country.flags.svg} alt={`flag of ${country.name.common}`} style={flagStyle} />
            <p></p>
            <Weather weather={country.weather}></Weather>
        </>

    )
}

export default SingleCountry