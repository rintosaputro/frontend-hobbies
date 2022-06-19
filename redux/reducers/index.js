import {combineReducers} from 'redux'
import login from './auth/login'
import register from './auth/register'
import logout from './auth/logout'

const rootReducer = combineReducers({
  login,
  register,
  logout
})

export default rootReducer
