import React, { useState } from 'react';
import {Button, TextField} from "@mui/material";
import { useDispatch } from 'react-redux';
import { setAuth } from "../redux/slices/auth-slice";
import { setUserName } from "../redux/slices/user-slice";


export  const LoginForm = (params) => {
    const dispatch = useDispatch()

    const validUser = 'admin';
    const validPassword = 'admin';

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');



    return <React.Fragment>
        <TextField onChange={(e) => {setUser(e.target.value)}} label="User" size="small"/>
        <TextField onChange={(e) => {setPassword(e.target.value)}} label="Password" size="small" type="password"/>
        <Button onClick={verifyUserData} variant="contained" disableElevation>
            LogIn
        </Button>
    </React.Fragment>;

    function verifyUserData(e) {
        console.log(user, password)
        if (user === validUser && password === validPassword) {
            dispatch(setAuth(true));
            dispatch(setUserName(user));
        } else {
            alert("Invalid data, please try again")
        }
    }
};