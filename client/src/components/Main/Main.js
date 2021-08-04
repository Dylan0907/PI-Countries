import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import Panel from '../Panel/Panel'

export default function MainPage () {
  return(
    <React.Fragment>
        <div>
          <Link to="/addactivity">
            <button>Add Touristic Activity</button>
          </Link>
        </div>
        <Panel/>
    </React.Fragment>
  )
}
