import React from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom';

export default function Cards({currentCountries}) {
  return(
    <div>
    {currentCountries.map((c) =>{
        return (
        <React.Fragment>
          <Link to={"/detail/" + c.id}>
            <Card name={c.name} image={c.image} continent={c.continent} key={c.id} />
          </Link>
        </React.Fragment>
      )})}
    </div>
   )
}
