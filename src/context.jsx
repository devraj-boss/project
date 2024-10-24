import React, { createContext } from 'react'
export const contextt= createContext();
export const context = () => {
    
  return (
    <contextt.Provider value={"hi wassap"}>
     <App />
     </contextt.Provider>
    
  )
}
