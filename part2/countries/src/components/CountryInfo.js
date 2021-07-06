import React from 'react';
import Weather from './Weather';

const CountryInfo = ({country}) => {
    return (
      <div>
        <h1>{country.name}</h1>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
        <h2>languages</h2>
        <ul>{country.languages.map( lang => <li key={lang.name}>{lang.name}</li>)}</ul>
        <img style={{width : '200px'}} src={country.flag} alt={country.name}></img>
        <h2>weather in {country.capital}</h2>
        <Weather capital={country.capital} />
      </div>
    )
  }

  export default CountryInfo;