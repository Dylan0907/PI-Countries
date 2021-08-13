import React from 'react'
import SearchBar from './SearchBar'
import Order from './Order'
import Filters from './Filters'
import './Panel.css'

export default function Panel() {
    return (
        <React.Fragment>
          <div className="panel">
          <SearchBar />
          <Order />
          <Filters />
          </div>
        </React.Fragment>
    )
}
