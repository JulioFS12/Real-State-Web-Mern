import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import { NoFound } from '../components/NoFound';
import { AdminHome } from '../pages/AdminHome';
import { PrivateRoute } from '../routes/PrivateRoute';


export const LayoutAdmin = () => {

    const { aid } = useSelector(state => state.auth)
    console.log('LayoutAdmin');
    return (
        <Switch>
            <PrivateRoute exact={ true } path="/admin" component={ AdminHome } isAuthenticated={ !!aid }/>
            <PrivateRoute exact={ true } path="/nofound" component={ NoFound } isAuthenticated={ !!aid }/>

            <Redirect to="/nofound" />
        </Switch>
    )
}
