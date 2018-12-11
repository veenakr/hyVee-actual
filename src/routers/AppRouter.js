import React from 'react';
import { Route, Router } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/login/LoginPage';

export const history = createBrowserHistory();

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/dashboard" exact component={DashboardPage} />
                </div>
            </Router>
        )
    }
}

export default AppRouter;