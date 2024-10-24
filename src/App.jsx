import React, { useContext } from 'react'
import { contextt } from './context.jsx'
let data=useContext(contextt)
const App = () => {
  
  return (
    <div>
{data}
ddddd

    </div>
  )
}

export default App