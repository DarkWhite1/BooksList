import React from 'react';
import NavBar from './Component/NavBar/NavBar'
import './App.css'

import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component = {SignIn} />
      <Route  path="/SignUp" component = {SignUp} />
    </Router>

  );
}

export default App;
