import React from 'react'
import { useDispatch } from "react-redux";
import {filterByContinent} from "../../actions/actions"

export default function Filters() {

  const dispatch = useDispatch()

  function handleFilterContinent (e){
    e.preventDefault();
    dispatch(filterByContinent(e.target.value))
  };

  return (
    <div>
      <select onChange={e => handleFilterContinent(e)} >
        <option value="">Select a continent...</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
