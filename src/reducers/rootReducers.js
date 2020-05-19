// this is the root reducer! it is the store manager for all the reducers
 
// to make a rootreducer:
// 1. Get a method from redux, called combineReducers
import { combineReducers } from 'redux';
// 2. get each individual reducer
import frozenReducer from './frozenReducer';
import fruitReducer from './fruitReducer';
import packetReducer from './packetReducer';
// 3. call combineReducers and hand it an object
// each key in combineReducers will be piece of state in the redux store
// each value, will be the value of that piece of state in the redux store
const rootreducer = combineReducers({
    frozen: frozenReducer,
    fruit: fruitReducer,
    packet: packetReducer
})

export default rootreducer;
