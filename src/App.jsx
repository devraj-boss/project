import React, { useContext } from 'react'
import LoginCon from "./context/LoginCon"
import Joker from "./Joker"
const App = () => {
  return (
    <LoginCon>
      <Joker />
    </LoginCon>
  )
}

export default App