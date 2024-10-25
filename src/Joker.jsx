import React, { useContext } from 'react'
import {Login} from "./context/LoginCon"
const Joker = () => {
    let dataa=useContext(Login)
  return (
    <div>{dataa}</div>
  )
}

export default Joker