

const notificationReducer = (state = '', action) => {
    switch (action.type){
    case 'NEW_NOTIFICATION':
      return action.content
    case 'REMOVE_NOTIFICATION':
      return action.content
    default:
      return state
  }

}
const timeOuts = []

export const setNotification = (content, time) => {
   return async dispatch => {
     dispatch({
      type:'NEW_NOTIFICATION',
      content
    })
    let timeIlapsed = setTimeout(() => {
      dispatch({
      type:'REMOVE_NOTIFICATION',
      content: ''
    })
    }, time * 1000)

    timeOuts.push(timeIlapsed)
    
    for (let index = 0; index < timeOuts.length - 1; index++) {
        clearTimeout(timeOuts[index])
    }
    
    
    
  }
}
/* export const removeNotification = () => {
   return {
      type:'REMOVE_NOTIFICATION',
      content: ''
  }
} */
export default notificationReducer