import http from '../../../helper/helper'
import constant from '../../constant'
const {GET_HOBBY_NAME} = constant

const getHobbyByNameAction = (hobby) => (
  async (dispatch) => {
    try {
      const {data} = await http().get(`/hobbies/name?hobby=${hobby}`)
      dispatch({
        type: GET_HOBBY_NAME,
        payload: data.results
      })
    }
    catch (err) {
      dispatch({
        type: `${GET_HOBBY_NAME}_ERR`,
        payload: err.response?.data.message
      })
    }
  }
)

export default getHobbyByNameAction
