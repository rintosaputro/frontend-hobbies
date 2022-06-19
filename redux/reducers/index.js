import {combineReducers} from 'redux'
import login from './auth/login'
import register from './auth/register'

const rootReducer = combineReducers({
  login,
  register
})

export default rootReducer
