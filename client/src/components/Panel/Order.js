import React from 'react';
import { useDispatch } from "react-redux";
import {orderByName, orderByPop} from "../../actions/actions"

export default function Order () {

  const dispatch = useDispatch()

  function handleSort (e){
    e.preventDefault();
    let value = e.target.value;
    if (value.includes('max')) {
      dispatch(orderByPop(e.target.value))
    } else {
      dispatch(orderByName(e.target.value))
    }
  };

  return(
    <>
    <div>
      <select onChange={e => handleSort(e)} >
          <option value="">...</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
      </select>
    </div>
    <div>
      <select onChange={e => handleSort(e)} >
          <option value="">...</option>
          <option value="min-max">min-max</option>
          <option value="max-min">max-min</option>
      </select>
    </div>
    </>
  )
}
