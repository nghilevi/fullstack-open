import React from 'react';
import Country from './Country';
import CountryInfo from './CountryInfo';

const SearchResult = ({countries}) => {

    if(countries.length > 10){
      return (
        <div>Too many matches, specify another filter</div>
      )   
    }
  
    if(countries.length === 1){
      return (
        <div><CountryInfo country={countries[0]} /></div>
      )   
    }
  
    return (
      <div>
        {countries.map( (country) => {
          return <Country key={country} country={country} />
        })}
      </div>
    )
  
}

export default SearchResult;