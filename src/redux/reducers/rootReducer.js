import { combineReducers } from 'redux';
import countReducer from './counterReducer';

export default combineReducers({
    countObj: countReducer,
});
