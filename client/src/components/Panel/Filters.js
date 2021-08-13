import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {filterByContinent,filterByActivity} from "../../actions/actions"

export default function Filters() {

  const dispatch = useDispatch()
  const activities = useSelector((state) => state.activities);

  function handleFilterContinent (e){
    if(e.target.value !== ''){
    e.preventDefault();
    dispatch(filterByContinent(e.target.value))}
  };

  function handleFilterActivity (e){
    if(e.target.value !== ''){
    e.preventDefault();
    dispatch(filterByActivity(e.target.value))}
  };

  return (
    <React.Fragment>
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
    <div>
      <select onChange={e => handleFilterActivity(e)}>
        <option value="">Select an activity</option>
        {activities.map((a)=>{
          return (
            <option value={a.name} key={a.name}>{a.name}</option>
          )
        })}
      </select>
    </div>
    </React.Fragment>
  )
}
