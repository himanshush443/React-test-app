import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Login from './Login';
import Logo from './assets/user.svg';
import userPic from './assets/user_pic.png';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    username: {
      marginBottom: 12,
    },
    firstname: {
        marginBottom: 12,
        marginTop: 15
    },
    lastname: {
        marginBottom: 12,
    },
    email: {
        marginBottom: 12,
    }
  });

function Dropdown() {
    const classes = useStyles();
    
    const [openDropdown, setOpenDropdown] = useState(false);
    const [check, setCheck] = useState(false);

    return (
        <div className="">

            {
                check ? (
                    <Button ><img src={userPic} /></Button>
                ) : (
                    <Button onClick={() => {
                        setOpenDropdown(!openDropdown);
                    }}
                    ><img src={Logo} /></Button>
                )
            }
            
            { 
                openDropdown ? (
                    <div>
                        <Router>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">Sign Up</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Router>
                    </div>
            ) : (
                <div></div>
            )}

        </div>
    );
}

export default Dropdown
