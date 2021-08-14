import React from 'react';
import "./Pagination.css";

export default function Pagination ({countriesPerPage, allCountries,paginate}) {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(allCountries / countriesPerPage); i++){
            pageNumbers.push(i);
        }
    return(
        <div className="pagination">
            <nav  style={{display: "inline-block"}}>
                {pageNumbers && pageNumbers.map (number => (
                            <button onClick={() =>paginate(number)} key={number}>{number}</button>
                    ))
                }
            </nav>
        </div>
    )
}
