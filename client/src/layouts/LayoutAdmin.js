import React from 'react';
import {
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
import { AdminHome } from '../pages/AdminHome';
import { AdminLogin } from '../pages/AdminLogin';
import { AdminRegister } from '../pages/AdminRegister';

export const LayoutAdmin = () => {

    return (
        <>
            <Switch>
                <Route exact={true} path="/admin" component={AdminLogin}/>
                <Route exact={true} path="/admin/register" component={AdminRegister}/>
                <Route exact={true} path="/admin/home" component={AdminHome}/>

                <Redirect to="/admin"/>
            </Switch>
        </>
    )
}
