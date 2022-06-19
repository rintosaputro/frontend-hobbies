import http from '../../../helper/helper'
import constant from '../../constant'
const {GET_USERS} = constant

const getAllUsers = async (dispatch) => {
  try {
    const {data} = await http().get('/users?limit=100')
    dispatch({
      type: GET_USERS,
      payload: data.results
    })
  }
  catch (err) {
    dispatch({
      type: `${GET_USERS}_ERR`,
      payload: err.response?.data.message
    })
  }
}

export default getAllUsers
