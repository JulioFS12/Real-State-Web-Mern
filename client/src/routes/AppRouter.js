import React from 'react';
import {
  BrowserRouter as Router,
    Redirect,
    Route,
  Switch,
} from "react-router-dom";
import { LayoutAdmin } from '../layouts/LayoutAdmin';
import { LayoutUser } from '../layouts/LayoutUser';

export const AppRouter = () => {
    return (
        <>
            <Router>

                <Switch>
                    <Route exact={true} path="/admin" component={LayoutAdmin} />
                    <Route exact={true} path="/" component={LayoutUser} />

                    <Redirect to="/"/>
                </Switch>

            </Router>
        </>
    )
}
