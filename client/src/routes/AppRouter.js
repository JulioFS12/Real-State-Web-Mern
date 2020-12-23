import React from 'react';
import { Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { LayoutAdmin } from '../layouts/LayoutAdmin';
import { LayoutUser } from '../layouts/LayoutUser';
import { AdminLogin } from '../pages/AdminLogin';
import { AdminRegister } from '../pages/AdminRegister';
import { store } from '../redux/store/store';

export const AppRouter = () => {

    

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={LayoutUser}/>
                    <Route exact={true} path="/login"  component={AdminLogin} />
                    <Route exact={true} path="/register" component={AdminRegister}/>
                    <Route exact={true} path="/admin" component={LayoutAdmin} />

                    <Redirect to="/"/>
                </Switch>
            </Router>
        </Provider>
    )
}