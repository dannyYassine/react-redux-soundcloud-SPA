/**
 * Created by dannyyassine on 2017-07-16.
 */
import React from 'react';
import {Route, Link} from 'react-router-dom';

export const RouteWithSubRoutes = (route) => (
    <Route exact path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} />
    )}/>
);

export const CustomLink = ({ to, activeOnExact, text }) => (
    <Route path={to} exact={activeOnExact} children={({ match }) => (
        <div className={match ? 'active' : ''}>
            {match ? '> ' : ''}<Link to={to}>{text}</Link>
        </div>
    )}/>
);

export const Nav = () => (
    <ul>
        <a>
            <CustomLink to="/" text="Home" activeOnExact={true}/>
        </a>
        <a>
            <CustomLink to="/users" text="Users" activeOnExact={true}/>
        </a>
    </ul>
);