import React from 'react';
import {
  BrowserRouter as Router,
    Route,
  Switch,
} from "react-router-dom";
import { routes } from './routes';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    {
                        routes.map((route, index) => (
                            <DashBoradAppRouter key={index} {...route}/>
                        ))
                    }
                </Switch>
            </Router>
        </>
    )
}

const DashBoradAppRouter = (route) => {
        
    return (
        <>
            <Route 
                exact={route.exact} 
                path={route.path} 
                render={(props) => <route.component routes={route.subRoutes} {...props} />}
            />
        </>
    )
}
