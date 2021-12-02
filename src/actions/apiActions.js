export const postVideoAction = () => dispatch => {
  dispatch({
   type: 'POST_VIDEO',
   payload: 'result'
  })
}

export const getInsertAction = () => dispatch => {
  dispatch({
   type: 'GET_INSERTS',
   payload: 'result'
  })
}

export const postVideo = () => dispatch => {
  dispatch({
   type: 'POST_INSERTS',
   payload: 'result'
  })
}
