import React from 'react'
import SearchBar from './SearchBar'
import Order from './Order'
import Filters from './Filters'
import './Panel.css'

export default function Panel({handleClick, setPage}) {
    return (
        <React.Fragment>
          <div className="panel">
          <SearchBar setPage={setPage}/>
            <button
              id="panelButton"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Restore
            </button>
          <Order setPage={setPage}/>
          <Filters setPage={setPage}/>
          </div>
        </React.Fragment>
    )
}
