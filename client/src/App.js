import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import "./App.css";
import BusinessLandingPage from './components/BusinessLandingPage.js';
import Search from './components/Search.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        {/*         
        <Router>
          <Switch>
            <Route path='/business'>
              <BusinessLandingPage business={data} />
            </Route>
            <Route path='/'>
            </Route>
          </Switch>
        </Router> */}

      </header>
    </div>
  );
}

export default App;