import React from 'react';
import "./App.css";
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