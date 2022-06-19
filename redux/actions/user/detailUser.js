import http from '../../../helper/helper'
import constant from '../../constant'
const {GET_DETAIL_USER} = constant

const detailUserAction = (id) => (
  async (dispatch) => {
    try {
      const {data} = await http().get(`/users/${id}`)
      dispatch({
        type: GET_DETAIL_USER,
        payload: data.results
      })
    }
    catch (err) {
      dispatch({
        type: `${GET_DETAIL_USER}_ERR`,
        payload: err.response?.data.message
      })
    }
  }
)
  

export default detailUserAction
