import './App.css';
import { useState } from 'react';
import Dropdown from './Dropdown';
import Profile from './Profile';
import { Button } from '@material-ui/core';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(true);

  return (
    <div className="app">
      <div className="header">
        <h1>
          <a>
            ILRNU
        </a>
        </h1>
        <div className="rightHeader">
          <Button >Join as a Tutor</Button>
          {/* <img src="" alt="" /> */}
          {loggedIn ? (
            <Profile />
          ) : (
            <Dropdown />

          )
          }
        </div>
      </div>

    </div>
  );
}

export default App;
