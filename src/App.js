import React from 'react';
import NavBar from './Component/NavBar/NavBar'
import './App.css'
import SignUp from './Component/Auth/SignUp'
import Profile from './Component/Profile/Profile'
import BooksList from './Component/BooksList/BooksList'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component = {SignUp} />
      <Route  path="/Profile" component = {Profile} />
      <Route  path="/BooksList" component = {BooksList} />
    </Router>

  );
}

export default App;
