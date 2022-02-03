import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Add from './Add';

import View from './View';

function App() {

  const [todos, changeTodos] = useState([]);
  
  const updateList = (id, content, username) => {
    const listItem = {id, content, username};
    localStorage.setItem(
      "POST",
      JSON.stringify([...todos, listItem])
    );
    changeTodos((state) => [...state, listItem])
  };

  
  //<Button
          //onClick={onSubmit}
      // />

  useEffect(() => {
    const listContents = localStorage.getItem("POST")
    changeTodos(
      JSON.parse(listContents) || []
    )
  },[])

  return (
  <BrowserRouter>
    <Routes>
        <Route
          path="/Add"
          element={
            <Add
              addStory={(id, content, username) =>
                updateList(id, content, username)
              }
            />
          }
          />
        <Route index element={<View todos={todos} />} />
        <Route path="/view" element={<View todos={todos} />} />
    </Routes>
  </BrowserRouter> 


    )
}

export default App;
