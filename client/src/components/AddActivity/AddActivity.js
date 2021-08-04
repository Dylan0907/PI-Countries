import React from 'react'
import { Link } from 'react-router-dom';

export default function AddActivity() {
    return (
        <React.Fragment>
          <div>
            <Link to="/main">
              <button>Return Main</button>
            </Link>
          </div>
          <div>
                <div>
                    <div>
                        <h1>CREATE ACTIVITY</h1>
                    </div>
                    <form action="http://localhost:3001/activity" method="POST">
                        <div>
                            <p>Name</p>
                            <input
                                type="text"
                                name="name"
                                className="input-post"
                                placeholder="Name..."
                            />
                        </div>
                        <p>Difficulty</p>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                        <p>Duration</p>
                        <div className="sel-duration">
                          <input
                            type="number"
                            step=".1"
                            name='duration'
                            className="input-post"
                            placeholder="Duration..."
                          />
                        </div>
                        <p>Season</p>
                        <select>
                          <option value="Spring">Spring</option>
                          <option value="Summer">Summer</option>
                          <option value="Autumn">Autumn</option>
                          <option value="Winter">Winter</option>
                        </select>
                        <hr />
                        <div>
                          <button type="submit">ADD ACTIVITY</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
