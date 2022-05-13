import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import btnReducer from './btnReducer';
import carReducer from './carReducer';

export default combineReducers({
    car: carReducer,
    btn: btnReducer,
    alert: alertReducer,
    auth: authReducer,
});
