/*
import React, { useEffect, useState,useRef } from "react";
import './App.css'
const App = () => {
  let div=useRef();
  let [pass, spass] = useState("");
  useEffect(() => {
    let str = "ABCDEFGHIJJKLMNOPQRSTUVWXYZ1234567890#%&*#";
    let mal = "";
    for (let i = 0; i <= 9; i++) {
      let n = Math.floor(Math.random() * str.length);
      mal += str.charAt(n);
    }
    spass(mal);
console.log(div.current.style.backgroundColor='red')
  }, []);

  return <div ref={div}>{pass}</div>;
};

export default App;
*/

/*
import React from "react";
import "./App.css";
import { useReducer } from "react";
const App = () => {
  let initial=''
  const reducer = (state, action) => {
   if(action.type=='inc')alert('BARDGAYA')
   if(action.type=='dec')alert('KAMGAYA')
  };
  let [state, dispatch] = useReducer(reducer,initial);
  return (
    <>
      <div onClick={() => dispatch({ type: "inc" })}>App</div>
      <div onClick={() => dispatch({ type: "dec" })}>looo</div>
    </>
  );
};

export default App;
*/

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [arr, setarr] = useState([]);
  const [data, setdata] = useState("");

  useEffect(() => {
    // Get todos from localStorage on initial load
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setarr(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Store todos in localStorage whenever arr changes
    localStorage.setItem("todos", JSON.stringify(arr));
  }, [arr]);

  const handleAddTodo = () => {
    if (data) {
      setarr([...arr, data]);
      setdata(""); // Clear the input field after adding
    }
  };

  const handleRemoveTodo = (id) => {
    setarr(arr.filter((_, i) => i !== id));
  };

  return (
    <>
      <input
        type="text"
        placeholder="ADD TODOS"
        onChange={(e) => setdata(e.target.value)}
        value={data}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <div>
        {arr.map((todo, id) => {
          return (
            <div key={id}>
              <p>{todo}</p>
              <button onClick={() => handleRemoveTodo(id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
