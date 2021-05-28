import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Profile from './Profile';
import { Button } from '@material-ui/core';

const Homepage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(true);

    return (
        <div className="homepage">
            <div className="rightHeader">
          <Button >Join as a Tutor</Button>
          { loggedIn ? <Profile /> : <Dropdown /> }
        </div>
        </div>
    )
}

export default Homepage
