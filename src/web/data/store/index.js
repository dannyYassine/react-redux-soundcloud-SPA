/**
 * Created by dannyyassine on 2017-07-14.
 */

import { createStore } from 'redux';
import rootReducer  from './../reducers';

export const store = createStore(
    rootReducer
);