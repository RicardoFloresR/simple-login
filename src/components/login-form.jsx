import React, { useState, useEffect } from 'react';
import {TextField} from "@mui/material";

export  const LoginForm = (params) => {

    const myInput = <input type="text" label="My input"/>

return <React.Fragment>
    <TextField label="Usario" size="small"/>
    <TextField label="Password" type="password"/>
</React.Fragment>;

};