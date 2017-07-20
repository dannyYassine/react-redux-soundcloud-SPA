/**
 * Created by dannyyassine on 2017-07-14.
 */

import { combineReducers } from 'redux';
import { tracksReducer } from './tracks';
import { playerReducer } from './player';

export default combineReducers({
    tracks: tracksReducer,
    player: playerReducer
});