import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {

    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      setCountries(res.data);
      setLoad(true);
    })
    .catch(err => {
      setError(err.mesage);
      setLoad(true)
    })
  }, []);

  if(load) {
    return (
      <ul> {
        error ? <li> {error.mesage}</li>: 
        countries.map((country, index) => 
        <li key={index}>{country.name}</li>)
      } </ul>
    )
  } else {
    return (
      <div>
        Loading.....
      </div>
    )
  }
}
