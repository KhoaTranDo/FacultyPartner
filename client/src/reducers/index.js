import couterReducer from './counter';
import loggedReducer from './isLogged';

import{combineReducers} from 'redux';

const allReducers =combineReducers({
    myCouter: couterReducer,
    isLogged:loggedReducer
})


export default allReducers;