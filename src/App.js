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

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
            <div>
                <Route exact path={PATH.LANDING} component={LandingPage} />
                <Route path={PATH.HOME} component={HomePage} />
                <Route path={PATH.SIGN_UP} component={SignUpPage} />
            </div>
        </Router>
    </div>
  );
}

export default App;
