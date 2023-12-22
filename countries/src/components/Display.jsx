import CountryList from "./CountryList";
import SingleCountry from "./SingleCountry";

const Display = ({ countries, country, selectSingleCountry }) => {

    if (countries === null) {
        return <p>No countries</p>
    }
    if (countries.length === 0) {
        return <p>No matches for this filter</p>
    }
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    }
    if (countries.length > 1) {
        return <CountryList countries={countries} selectSingleCountry={selectSingleCountry} />
    }
    if (countries.length === 1) {
        return <SingleCountry country={country} />
    }
}

export default Display