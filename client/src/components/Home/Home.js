import React from 'react';
import { Link } from 'react-router-dom';

export default function Home (){
  return (
    <React.Fragment>
            <div>
                <div>
                    <Link to="/main">
                        <button>START</button>
                    </Link>
                </div>
            </div>
      </React.Fragment>
  )
}
