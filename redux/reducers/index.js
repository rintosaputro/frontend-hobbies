import {combineReducers} from 'redux'
import login from './auth/login'
import register from './auth/register'
import logout from './auth/logout'
import getProfile from './profile/getProfile'
import getUsers from './user/getUsers'

const rootReducer = combineReducers({
  login,
  register,
  logout,
  profile: getProfile,
  usersList: getUsers
})

export default rootReducer
