import React from 'react'
import Card from '../Card/Card'
import "./Cards.css"

export default function Cards({currentCountries}) {
  return(
    <div className="gridContainer">
    {currentCountries.map((c) =>{
        return (
        <div className="gridItem">
            <Card name={c.name} image={c.image} continent={c.continent} key={c.id} id={c.id}/>
        </div>
      )})}
    </div>
   )
}
