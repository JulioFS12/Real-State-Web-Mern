import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
import { AdminHome } from '../pages/AdminHome';
import { AdminLogin } from '../pages/AdminLogin';
import { AdminRegister } from '../pages/AdminRegister';
import { startChecking } from '../redux/actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const LayoutAdmin = () => {

    const { checking, aid } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch]);

    if( checking ){
        return <h1>WAIT...</h1>
    }

    return (
        <>
            <Switch>
                <PublicRoute 
                    exact={true} 
                    path="/admin" 
                    component={AdminLogin} 
                    isAuthenticated={ !!aid }
                />

                <PublicRoute 
                    exact={true} 
                    path="/admin/register" 
                    component={AdminRegister} 
                    isAuthenticated={ !!aid }
                />

                <PrivateRoute 
                    exact={true} 
                    path="/admin/home" 
                    component={AdminHome} 
                    isAuthenticated={ !!aid } 
                />

            </Switch>
        </>
    )
}
