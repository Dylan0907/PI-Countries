import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Detail from './components/Detail/Detail'
import AddActivity from './components/AddActivity/AddActivity'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/'  component={Home}/>
      <Route path='/main' component={Main}/>
      <Route exact path='/addactivity' component={AddActivity}/>
      <Route exact path='/detail/:id' component={Detail}/>
    </React.Fragment>
  );
}

export default App;
