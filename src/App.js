import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

import MovieContainer from './container/movie-container';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact to='/' component={MovieContainer} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
