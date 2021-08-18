import React from 'react';
import { useDispatch } from "react-redux";
import {orderByName, orderByPop} from "../../actions/actions"
import './Order.css'

export default function Order () {

  const dispatch = useDispatch()

  function handleSort (e){
    e.preventDefault();
    let value = e.target.value;
    if (value.includes('max')) {
      dispatch(orderByPop(e.target.value))
    } else if(value!==''){
      dispatch(orderByName(e.target.value))
    }
  };

  return(
    <div className="order-container">
      <select onChange={e => handleSort(e)} >
          <option value="">Alphabetical order</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
      </select>
      <select onChange={e => handleSort(e)} >
          <option value="">Order by population</option>
          <option value="min-max">min-max</option>
          <option value="max-min">max-min</option>
      </select>
  </div>
  )
}
