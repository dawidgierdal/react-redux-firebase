import React from 'react';
import { withAuthorization } from '../Session';

const _HomePage = () => (
    <div>
        <h1>HomePage</h1>
        <p>The Home Page is accessible by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export const HomePage = withAuthorization(condition)(_HomePage);