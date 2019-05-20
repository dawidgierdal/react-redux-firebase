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
import { withFirebase } from "./components/Firebase";

class App extends React.Component {
    state = {
        authUser: null,
    };
    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            },
        );
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation authUser={this.state.authUser} />
                    <div>
                        <Route exact path={PATH.LANDING} component={LandingPage} />
                        <Route path={PATH.HOME} component={HomePage} />
                        <Route path={PATH.SIGN_UP} component={SignUpPage} />
                        <Route path={PATH.SIGN_IN} component={SignInPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default withFirebase(App);
