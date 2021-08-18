import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions/actions";
import { useEffect } from "react";
import './Detail.css'

export default function Detail(props){
const { id } = useParams()
const dispatch = useDispatch();
 useEffect(() => {
     dispatch(getDetails(id));
 },[dispatch, id]);

const myCountry = useSelector ((state) => state.countryDetail);

 return (
    <div className="page">
        <div className="box">
          <div className="containerDetail">
          <h2>{myCountry.name} ({id})</h2>
          <img  src={myCountry.image} className="detail-img" alt= '' width="250px" height="150px"/>
          <h3>Continent: {myCountry.continent}</h3>
          <h4>Capital: {myCountry.capital}</h4>
          <h4>Subregion: {myCountry.subregion}</h4>
          <h4>Area: {myCountry.area} km²</h4>
          <h4>Population: {myCountry.population} hab.</h4>
          </div>
          <div div className="containerDetail">
            <h2>Activities</h2>
          {!myCountry.activities ? <p>no hay</p>: myCountry.activities.map((a)=>{
            return(
              <div className="activities">
                <h3>Name: {a.name}</h3>
                <h5>Difficulty: {a.difficulty} </h5>
                <h5>Season: {a.season}</h5>
                <h5>Duration: {a.duration}</h5>
              </div>
            )
          })}
          </div>
      </div>
      <div>
        <Link to= '/main'>
            <button className="buttonDetail">Return main</button>
        </Link>
      </div>
    </div>
)
}
