import React, {useState} from 'react';
import Dropdown from '../dropdown/Dropdown';
import Profile from '../profile/Profile';
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
