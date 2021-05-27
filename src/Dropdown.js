import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Logo from './assets/user.svg';
import userPic from './assets/user_pic.png';

const useStyles = makeStyles({
    dropdownList: {
    //   display: 'none'
    },
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


const handleDropdown = () => {
    // const classes = useStyles();
} 

function Dropdown() {
    const classes = useStyles();
    
    const [openDropdown, setOpenDropdown] = useState(false);
    const [check, setCheck] = useState(false);

    return (
        <div className="">
            
            {
                check ? (
                    <Button 
                    // onClick={() => {
                    //     setOpenDropdown(!openDropdown);
                    // }}
                    ><img src={userPic} /></Button>
                ) : (
                    <Button onClick={() => {
                        setOpenDropdown(!openDropdown);
                    }}
                    ><img src={Logo} /></Button>
                )
            }
            
            {openDropdown ? (
            <div className={classes.dropdownList}>
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
                    <Switch>
                        
                        <Route path="/login">
                            <Login className={classes.login} close={() => setOpenDropdown(false)} submission={(value) => {
                                setCheck(value);
                                setOpenDropdown(!value);
                                }} 
                            />
                        </Route>
                        <Route path="/signup">
                            {/* <Signup /> */}
                        </Route>
                    </Switch>
                </Router>
            </div>
            ) : (
                <div></div>
            )}

        </div>
    );
}

export default Dropdown
