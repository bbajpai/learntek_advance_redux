import {combineReducers} from 'redux';
import cars from './cars_reducer';
//import carDetails from './car_details'

const rootReducer = combineReducers({
    cars,
   // carDetails
});

export default rootReducer;