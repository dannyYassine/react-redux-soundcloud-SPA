/**
 * Created by dannyyassine on 2017-07-14.
 */

import { createStore, applyMiddleware } from 'redux';
import rootReducer  from '../reducers/index';
import thunk from 'redux-thunk' // no changes here 😀

export { initialStore } from './initialStore';

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
