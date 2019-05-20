import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from "../../constants/routes";
import { SignOutButton } from "../SignOut";

export const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={PATH.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={PATH.HOME}>Home</Link>
        </li>
        <li>
            <Link to={PATH.ACCOUNT}>Account</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={PATH.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={PATH.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);
