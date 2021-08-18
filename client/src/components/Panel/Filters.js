import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {filterByContinent,filterByActivity} from "../../actions/actions"
import "./Filters.css"

export default function Filters({setPage}) {

  const dispatch = useDispatch()
  const activities = useSelector((state) => state.activities);

  function handleFilterContinent (e){
    if(e.target.value !== ''){
    e.preventDefault();
    setPage();
    dispatch(filterByContinent(e.target.value))}
    e.target.value='';
  };

  function handleFilterActivity (e){
    if(e.target.value !== ''){
    e.preventDefault();
    setPage();
    dispatch(filterByActivity(e.target.value))}
    e.target.value='';
  };

  return (
    <div className="filter-container">
    <div>
      <select onChange={e => handleFilterContinent(e)} >
        <option value="">Filter by continent</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div>
      <select onChange={e => handleFilterActivity(e)}>
        <option value="">Filter by activity</option>
        {activities.map((a)=>{
          return (
            <option value={a.name} key={a.name}>{a.name}</option>
          )
        })}
      </select>
    </div>
  </div>
  )
}
