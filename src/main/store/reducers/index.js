import {
  combineReducers
} from 'redux';

import Login from './login/loginReducer'

const reducer = () => combineReducers({
  Login
})

export default reducer;
