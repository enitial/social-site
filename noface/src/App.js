import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Counter from "./Counter.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Add from './Add';
import View from './View';

function App() {
  const [posts, changePosts] = useState([]);
  
  const updateList = (id, username, content) => {
    const listItem = {id, username, content};
    localStorage.setItem("POST", JSON.stringify([...posts, listItem]) );
    changePosts((state) => [...state, listItem])
  };

  useEffect(() => {
    const listContents = localStorage.getItem("POST")
    changePosts(
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
            
              addPost={(id, content, username) =>
                updateList(id, content, username)
                
                
              }
            />
          }
          />
        <Route index element={<View posts={posts} />} />
        <Route path="/view" element={<View posts={posts} />} />
    </Routes>
  </BrowserRouter> 


    )
}

export default App;
