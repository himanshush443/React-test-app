import {
    Box, Button, Card,
    CardContent, DialogTitle, FormControl, IconButton,
    Input, makeStyles, Typography
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        minWidth: 275,
        marginLeft: '25%',
        marginTop: '100px'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3B3E51',
        textAlign: 'center'
    },
    inputs: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        fontSize: 14,
        padding: 7,

    },
    forgotPassword: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    footer: {
        fontSize: 14,

    },
});

interface IProps {
    close(): void;
    submission:(val:boolean) => void;
}

function Login(props: IProps) {
    
    const { close, submission } = props;
    const classes = useStyles();

    return (
        <div>
            <form onSubmit={(): void => {
                submission(true);
            }}>
                <Card className={classes.root}>
                    <CardContent>
                        <DialogTitle id="id">
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <Link to={{
                                        pathname: "/"
                                    }}>
                                        <IconButton onClick={close}>
                                            Close
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Box>
                        </DialogTitle>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Login
                        </Typography>
                        <div className={classes.inputs}>
                            <FormControl>
                                <Input className={classes.inputContent} type="text" placeholder="Your mail id" />
                            </FormControl>
                            <FormControl>
                                <Input className={classes.inputContent} type="password" placeholder="Enter password" />
                            </FormControl>
                        </div>
                        <div className={classes.forgotPassword}>
                            <Typography>
                                Forgot Password?
                            </Typography>
                        </div>
                        <div>
                            <Button>Login with gmail</Button>
                            <Button type="submit" >Login</Button>
                            <div className=''>
                                <Typography>
                                    Not a member of ILRNU?
                            </Typography>
                                <Button>Sign up</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}

export default Login
