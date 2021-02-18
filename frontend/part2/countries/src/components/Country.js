import React, { useState } from 'react';
import CountryInfo from './CountryInfo';

const Country = ({country}) => {
    const [show, setShow] = useState(false)
  
    const toggleCountryInfo = () => {
      setShow(!show)
    }
  
    return (
      <>
        <div key={country.name}>{country.name} <button onClick={toggleCountryInfo}>show</button> </div>
        {show ? <CountryInfo country={country} /> : ''}
      </>
    )
  }

export default Country;