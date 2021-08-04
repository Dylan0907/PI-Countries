import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import AddActivity from './components/AddActivity/AddActivity'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/'  component={Home}/>
      <Route path='/main' component={Main}/>
      <Route exact path='/addactivity' component={AddActivity}/>
    </React.Fragment>
  );
}

export default App;
