
import countryService from './services/countries'
import weatherService from './services/weather'
import Search from './components/Search';
import Display from './components/Display';
import { useState, useEffect } from 'react'



function App() {
  const [countries, setCountries] = useState(null)
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState(null)

  const filteredCountries = countries !== null ? countries?.filter(c => c.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1) : null


  useEffect(() => {

    countryService.get()
      .then(countries => setCountries(countries))
      .catch(error => console.log(error.message))
  }, [])

  useEffect(() => {
    if (filteredCountries === null) {
      return;
    }
    if (filteredCountries.length !== 1) {
      setCountry(null);
      return
    }
    if (country !== null && filteredCountries[0].name.common === country.name.common) return;

    setCountry(filteredCountries[0])

  }, [filteredCountries])

  useEffect(() => {

    if (country === null) return

    if (country.weather === undefined) {
      weatherService.get(country.capital[0])
        .then(weather => {
          const countryWithWeatherInfo = { ...country, weather: weather }
          setCountry(countryWithWeatherInfo)
        })
        .catch(error => console.log(error.message))

    }

  }, [country])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const selectSingleCountry = (countryName) => {
    setSearch(countryName)
  }
  return (
    <>

      <Search search={search} handleSearchChange={handleSearchChange} />
      <Display countries={filteredCountries} country={country} selectSingleCountry={selectSingleCountry} />

    </>
  )
}

export default App
