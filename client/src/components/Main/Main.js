import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getCountries, getActivities} from "../../actions/actions"
import { Link } from 'react-router-dom';
import Panel from '../Panel/Panel'
import Cards from '../Cards/Cards'
import Pagination from '../Pagination/Pagination'
import './Main.css'
import logo from './pngwing.com.png';

export default function MainPage () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);
  const allCountries = useSelector((state) => state.countries);
  const typeOrder = useSelector((state) => state.orderedBy);
  const activities = useSelector((state) => state.activities);
  const [currentPage,setCurrentPage] = useState(1);
  const [countriesPerPage]= useState(9);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const setPage = () =>{
    setCurrentPage(1);
  }
  const handleClick = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getCountries());
  };
  return(
    <React.Fragment>
        <div className="titleMain">
          <h1>COUNTRIES OF THE WORLD</h1>
          <Link to="/addactivity">
            <button>Add a Touristic Activity</button>
          </Link>
        </div>
        <Panel handleClick={handleClick} setPage={setPage}/>
        <div className="paginationCards">
          <Pagination
              countriesPerPage={countriesPerPage}
              allCountries={allCountries.length}
              paginate={paginate}
          />
        <Cards currentCountries={currentCountries}/>
        </div>
    </React.Fragment>
  )
}
