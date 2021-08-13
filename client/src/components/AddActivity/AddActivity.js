import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {postActivity} from "../../actions/actions"
import './AddActivity.css'

function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'A name is required';
    }
    return errors;
  };

export default function AddActivity() {

  const history = useHistory()
  const dispatch = useDispatch();
  const [errors,setErrors] = useState({});
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
       })
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      })
    );
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
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }));
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
    history.push('/main')
}

  const allCountries = useSelector((state) => state.countries)

    return (
        <React.Fragment>
          <div>
            <Link to="/main">
              <button>Return Main</button>
            </Link>
          </div>
          <div className="activityForm">
                <div>
                    <div>
                    <h1 className="activityTitle">CREATE A NEW ACTIVITY</h1>
                    </div>
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
                            type="number"
                            step=".1"
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
                        <div>
                          {input.countries.map((country)=>
                            {return (
                              <div>
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
        </React.Fragment>
    )
}
