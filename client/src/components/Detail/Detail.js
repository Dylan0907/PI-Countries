import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions/actions";
import { useEffect } from "react";

export default function Detail(props){
const { id } = useParams()
const dispatch = useDispatch();
 useEffect(() => {
     dispatch(getDetails(id));
 },[dispatch, id]);

const myCountry = useSelector ((state) => state.countryDetail);
 return (
    <div>
        <div>
          <h2>{myCountry.name} ({id})</h2>
          <img  src={myCountry.image} alt= '' width="200px" height="150px"/>
          <h3>Continent: {myCountry.continent}</h3>
          <h4>Capital: {myCountry.capital}</h4>
          <h4>Subregion: {myCountry.subregion}</h4>
          <h4>Area: {myCountry.area} {"\u33A2"}</h4>
          <h4>Population: {myCountry.population} hab.</h4>
        </div>
        <Link to= '/main'>
            <button>Return</button>
        </Link>
    </div>
)
}
