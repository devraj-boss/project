import React ,{useContext} from 'react'
import {User} from './content/userContext'
const Help = () => {
  let data=useContext(User)
  return (
    <div>{data}</div>
  )
}

export default Help