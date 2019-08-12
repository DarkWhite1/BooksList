import React from 'react';
import NavBar from './Component/NavBar/NavBar'
import './App.css'
import SignUp from './Component/Auth/SignUp'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component = {SignUp} />
    </Router>

  );
}

export default App;
