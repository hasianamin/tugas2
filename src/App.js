import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import './Helper.css'

import Header from './component/Header'
import Parkir from './pages/Parkir'
import Kata from './pages/Kata';
import Resto from './pages/Resto'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Parkir/>
        </Route>
        <Route exact path="/kata">
          <Kata/>
        </Route>
        <Route exact path="/resto">
          <Resto/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
