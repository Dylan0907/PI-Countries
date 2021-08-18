import React from 'react';
import {useState} from 'react';
import { useDispatch } from "react-redux";
import {getCountriesByName} from "../../actions/actions"
import './SearchBar.css'

export default function SearchBar({setPage}) {

  const dispatch = useDispatch()
  const [name,setName] = useState("")

  function handleInputChange(e){
   e.preventDefault()
   setName(e.target.value.toUpperCase())
  }

  function handleSubmit(e){
    e.preventDefault()
    setPage();
    dispatch(getCountriesByName(name))
   }

    return (
        <React.Fragment>
          <form>
          <input
            type="text"
            name="search"
            className="inputSearch"
            placeholder="Search a country..."
            onChange = {(e) => handleInputChange(e)}
          />
        <button type="submit" className="buttonSearch"
            onClick={(e) => handleSubmit(e)}
            >
            Search
          </button>
        </form>
        </React.Fragment>
    )
}
