import React from 'react';
import {useState} from 'react';
import { useDispatch } from "react-redux";
import {getCountriesByName} from "../../actions/actions"

export default function SearchBar() {

  const dispatch = useDispatch()
  const [name,setName] = useState("")

  function handleInputChange(e){
   e.preventDefault()
   setName(e.target.value.toUpperCase())
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(getCountriesByName(name))
   }

    return (
        <React.Fragment>
          <form>
          <input
            type="text"
            name="search"
            placeholder="Search country..."
            onChange = {(e) => handleInputChange(e)}
          />
          <button type="submit"
            onClick={(e) => handleSubmit(e)}
            >
            Try
          </button>
        </form>
        </React.Fragment>
    )
}
