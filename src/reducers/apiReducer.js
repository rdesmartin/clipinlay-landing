export default (state = {}, action) => {
  switch (action.type) {
    case 'POST_VIDEO':
      return {
        result: action.payload
      }
    case 'GET_INSERTS':
      action.payload.foreach(e => {
        state.inserts.push(e)
      })
      return {
        result: action.payload
      }
    case 'POST_INSERTS':
      action.payload.foreach(e => {
        state.selectedInserts.push(e)
      })
      return {
        result: action.payload
      }
    default:
      return state
  }
 }
