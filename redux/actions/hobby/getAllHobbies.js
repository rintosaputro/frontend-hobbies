import http from '../../../helper/helper'
import constant from '../../constant'
const {GET_HOBBIES} = constant

const getAllHobbiesAction = async (dispatch) => {
  try {
    const {data} = await http().get('/hobbies?limit=100')
    dispatch({
      type: GET_HOBBIES,
      payload: data.results
    })
  }
  catch (err) {
    dispatch({
      type: `${GET_HOBBIES}_ERR`,
      payload: err.response?.data.message
    })
  }
}

export default getAllHobbiesAction
