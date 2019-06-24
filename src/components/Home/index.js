import React from 'react';
import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';

const _HomePage = () => {
    return(
        <div>
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                        <h1>Account: {authUser.email}</h1>
                        <h1>HomePage</h1>
                        <p>The Home Page is accessible by every signed in user.</p>
                    </div>
                )}
            </AuthUserContext.Consumer>
        </div>
    )
};

const condition = authUser => !!authUser;
export const HomePage = withAuthorization(condition)(_HomePage);