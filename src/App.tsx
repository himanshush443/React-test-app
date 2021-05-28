import './App.css';
import React,{ useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import Login from './Login';

function App() {

  return (
    <div className="app">
      <div className="header">
        <h1>
          <a>
            ILRNU
        </a>
        </h1>
        <Router>
                    <Switch>
                        
                        <Route path="/login" component={Login}  />
                        <Route path="/signup">
                            {/* <Signup /> */}
                        </Route>
                    </Switch>
                </Router>
        <Homepage />
      </div>

    </div>
  );
}

export default App;
