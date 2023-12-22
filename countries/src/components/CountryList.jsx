
const CountryList = ({ countries, selectSingleCountry }) => {

    return (<ul>
        {countries.map(c => {
            return (
                <li key={c.name.common}>
                    {c.name.common}
                    <button onClick={() => selectSingleCountry(c.name.common)}>Show</button>
                </li>
            )

        })}</ul>)
}

export default CountryList