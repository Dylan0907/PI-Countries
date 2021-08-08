import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getCountries} from "../../actions/actions"
import { Link } from 'react-router-dom';
import Panel from '../Panel/Panel'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'

export default function MainPage () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const allCountries = useSelector((state) => state.countries);
  const typeOrder = useSelector((state) => state.orderedBy);
  const [currentPage,setCurrentPage] = useState(1);
  const [countriesPerPage]= useState(9);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
    <React.Fragment>
        <div>
          <Link to="/addactivity">
            <button>Add Touristic Activity</button>
          </Link>
        </div>
        <Panel/>
        <div>
          <Pagination
              countriesPerPage={countriesPerPage}
              allCountries={allCountries.length}
              paginate={paginate}
          />
        </div>
        {currentCountries?.map((c) => {
          return (
            <fragment className='countries'>
              <Link to={"/detail/" + c.id}>
                <Card name={c.name} image={c.image} continent={c.continent}  key={c.id} />
              </Link>
            </fragment>
          );
        })}
    </React.Fragment>
  )
}
