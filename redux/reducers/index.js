import {combineReducers} from 'redux'
import login from './auth/login'
import register from './auth/register'
import logout from './auth/logout'
import getProfile from './profile/getProfile'

const rootReducer = combineReducers({
  login,
  register,
  logout,
  profile: getProfile
})

export default rootReducer
