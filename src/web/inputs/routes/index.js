/**
 * Created by dannyyassine on 2017-07-14.
 */
import React from 'react'
import HomePage from '../containers/home/index';
import { Nav, CustomLink } from './routePaths';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import App from './../app';
import Home from '../containers/home'
import TrackDetail from './../components/trackDetail';

export const routes = [
    { path: '/',
        component: App
    },
    { path: '/home',
        component: HomePage
    }
];

const getTrackWithId = (trackId) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.soundcloud.com/tracks/${trackId}?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U`).then((response) => {
            return response.json();
        }).then((json) => {
            resolve(json);
        }).catch(reject);
    });
};

const HomeComp = (props) => (
    <Home
        {...props}
    />
);

const TrackDetailFactory = (props) => (
    <TrackDetail
        {...props}
        getTrackWithId={getTrackWithId}
    />
);

const Users = props => (
  <div>Users</div>
);

export const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Nav}/>
            <Route path="/" children={() => (
                <App>
                    <Switch>
                        <Route exact path="/" component={HomeComp}/>
                        <Route exact path="/users" component={Users}/>
                        <Route path="/tracks/:track_id" component={TrackDetailFactory} />
                        <Route render={({ history }) => (
                            <div>
                                404
                                <div>
                                    <button onClick={(e) => history.push("/")}>Bring me to safety</button>
                                </div>
                            </div>
                        )}/>
                    </Switch>
                </App>
            )}/>
        </div>
    </BrowserRouter>
);
