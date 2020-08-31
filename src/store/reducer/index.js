import { combineReducers } from 'redux';
import reducer from './reducer';
import productreducer from './productreducer';


export default combineReducers({
    rootReducer: reducer,
    productreducer: productreducer
})