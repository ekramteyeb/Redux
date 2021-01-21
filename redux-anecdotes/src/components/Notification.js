import React from 'react'
import { useSelector} from 'react-redux'
//import { createNotification } from '../reducers/notificationReducer'

const Notification = () => {

  const notification = useSelector(state => state.notification)
  
  const style = {
    border: 'solid green 1px',
    padding: 10,
    borderWidth: 1,
    display:'solid', 
    margin:'10px 0 10px'
  }
  if(!notification){
    style.display = 'none'
  }else{
    style.display = 'block'
  }


  return (
    <div style={style}>
      {notification}
    </div>
    
  )
}

export default Notification