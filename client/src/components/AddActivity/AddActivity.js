import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {postActivity,getCountries} from "../../actions/actions";
import './AddActivity.css';

export default function AddActivity() {

  const dispatch = useDispatch();
  const [error,setError] = useState(false);
  const [input,setInput] = useState({
        name: "",
        difficulty: "",
        duration:"",
        season:"",
        countries:[]
    });

  function handleChange(e){
      setInput({
          ...input,
          [e.target.name] : e.target.value
       });
  }

  function handleDelete(el){
    setInput({
        ...input,
        countries: input.countries.filter(c => c !== el)
    })
  }

  function handleSelect(e){
    setInput({
        ...input,
        [e.target.name]: [e.target.value]
    })
  }
  function handleSelectCountries(e){
      setInput({
        ...input,
        countries: [...input.countries,e.target.value]
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    if (input.name.trim()==='' || input.difficulty[0].trim()==='' || input.countries.length ===0
      || input.season[0].trim()==='') {
      setError(true);
    } else {
    setError(false);
    dispatch(postActivity(input))
    alert("Activity created!!")
    setInput({
        name:" ",
        difficulty: '',
        duration: '',
        season: '',
        image: '',
        countries:[]
    })
    }
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const allCountries = useSelector((state) => state.countries)

    return (
        <div className="AddActivityPage">
          <div>
            <Link to="/main">
              <button className="buttonAddActivity">Return Main</button>
            </Link>
          </div>
          <div className="activityForm">
                <div>
                    <div>
                    <h1 className="activityTitle">CREATE A NEW ACTIVITY</h1>
                    </div>
                    {error ? <p className='error'>Every field is required</p> : null}
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div>
                        <p>Name</p>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name..."
                          onChange={(e)=>handleChange(e)}
                        />
                        </div>
                        <p>Difficulty</p>
                        <div className="activitySelect">
                        <select name="difficulty" onChange={(e) => handleSelect(e)}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        </div>
                        <p>Duration</p>
                        <div>
                          <input
                            type="text"
                            name='duration'
                            placeholder="Duration..."
                            onChange={(e)=>handleChange(e)}
                          />
                        </div>
                        <p>Season</p>
                        <div className="activitySelect">
                        <select name="season" onChange={(e) => handleSelect(e)}>
                          <option value="Spring">Spring</option>
                          <option value="Summer">Summer</option>
                          <option value="Autumn">Autumn</option>
                          <option value="Winter">Winter</option>
                        </select>
                        </div>
                        <p>Select countries</p>
                        <div>
                        <select name="countries" onChange={(e) => handleSelectCountries(e)}>
                          <option value="">Choose countries...</option>
                          {allCountries.map((country)=>{
                            return <option
                              value={country.id}
                              >{country.name}</option>
                          })}
                        </select>
                        </div>
                        <div className="grid-countries">
                          {input.countries.map((country)=>
                            {return (
                              <div className="grid-country">
                              <p>{country}</p>
                              <button onClick={()=> handleDelete(country)}>x</button>
                              </div>
                            )})
                          }
                        </div>
                        <div>
                          <button type="submit" id="activityButton">ADD ACTIVITY</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
