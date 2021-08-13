import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


export default function Home (){
  return (
    <React.Fragment>
            <div className='home'>
                    <Link to="/main">
                        <button className='button'><span>START </span></button>
                    </Link>
            </div>
      </React.Fragment>
  )
}
