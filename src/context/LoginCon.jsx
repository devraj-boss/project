import React from 'react'
import { createContext } from 'react'
export let Login = createContext()
const LoginCon = ({children}) => {
  return (
    <Login.Provider value={"Antara"}>
{children}
    </Login.Provider>
  )
}

export default LoginCon