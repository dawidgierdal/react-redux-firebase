import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { PATH } from "./constants/routes";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./components/Landing";
import { HomePage } from "./components/Home";
import { SignUpPage } from "./components/SignUp";
import { SignInPage } from "./components/SignIn";
import withAuthentication from './components/Session/withAuthentication'

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={PATH.LANDING} component={LandingPage} />
            <Route path={PATH.SIGN_UP} component={SignUpPage} />
            <Route path={PATH.SIGN_IN} component={SignInPage} />
            <Route path={PATH.HOME} component={HomePage} />
        </div>
    </Router>
);

export default withAuthentication(App);
