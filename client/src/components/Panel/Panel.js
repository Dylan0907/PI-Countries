import React from 'react'
import SearchBar from './SearchBar'
import Order from './Order'
import Filters from './Filters'


export default function Panel() {
    return (
        <React.Fragment>
          <SearchBar />
          <Order />
          <Filters />
        </React.Fragment>
    )
}
