import { combineReducers } from 'redux';
import postReducer from './postReducers'

export default combineReducers({
    post:postReducer,
    //users: userReducer
    //photos: photosReducer
})
