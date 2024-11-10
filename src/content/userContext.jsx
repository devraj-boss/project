import React, { createContext } from "react";
export const User = createContext();
const userContext = ({ children }) => {
  return (
    <User.Provider value={" ojverov orferlf oifw fdewkfi0ewmflnvodfv wcvwijc"}>
      {children}
    </User.Provider>
  );
};

export default userContext;
