import React from 'react'
import SearchBar from './SearchBar'
import Order from './Order'
import Filters from './Filters'
import './Panel.css'

export default function Panel({handleClick}) {
    return (
        <React.Fragment>
          <div className="panel">
          <SearchBar />
            <button
              id="panelButton"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Restore
            </button>
          <Order />
          <Filters />
          </div>
        </React.Fragment>
    )
}
