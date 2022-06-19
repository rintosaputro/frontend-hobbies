import {combineReducers} from 'redux'
import login from './auth/login'
import register from './auth/register'
import logout from './auth/logout'
import getProfile from './profile/getProfile'
import getUsers from './user/getUsers'
import detailUser from './user/detailUser'
import getHobbies from './hobbies/getAllHobbies'
import editUserHobby from './hobbies/editUserHobby'
import getHobbyByName from './hobbies/getHobbyByName'
import addHobby from './hobbies/addHobby'
import addHobbiesUsers from './hobbies/addHobbiesUsers'

const rootReducer = combineReducers({
  login,
  register,
  logout,
  profile: getProfile,
  usersList: getUsers,
  detailUser,
  hobbiesList: getHobbies,
  editUserHobby,
  getHobbyByName,
  addHobby,
  addHobbiesUsers
})

export default rootReducer
