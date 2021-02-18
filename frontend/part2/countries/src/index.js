import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchResult from './components/SearchResult'

const App = () => {

  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  const filterCountry = (filterValue) => {
    const filtered = countries.filter((country) => {
      return country.name.toUpperCase().indexOf(filterValue.toUpperCase()) > -1
    })
    setFilteredCountries(filtered)
  }

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(reponses => {
        setCountries(reponses.data)
      })
  }, [])

  const handleSearch = (evt) => {
    const value = evt.target.value
    setSearchValue(value)
    filterCountry(value)
  }

  return (
    <div>
      find countries <input value={searchValue} onChange={handleSearch} />
      <SearchResult countries={filteredCountries} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))