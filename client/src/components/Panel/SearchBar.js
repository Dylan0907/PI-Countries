import React from 'react';

export default function SearchBar() {
    return (
        <React.Fragment>
          <form>
          <input
            type="text"
            name="search"
            placeholder="Search..."
          />
          <button type="submit">
            Try
          </button>
        </form>
        </React.Fragment>
    )
}
