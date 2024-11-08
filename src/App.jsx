import React, { useEffect, useState } from "react";

const App = () => {
  let [pass, spass] = useState("");
  useEffect(() => {
    let str = "ABCDEFGHIJJKLMNOPQRSTUVWXYZ1234567890#%&*#";
    let mal = "";
    for (let i = 0; i <= 8; i++) {
      let n = Math.floor(Math.random() * str.length);
      mal += str.charAt(n);
    }
    spass(mal);
  }, []);

  return <div>{pass}</div>;
};

export default App;
