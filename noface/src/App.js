import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import './App.css';

import Add from './Add'

function App() {
  const buttonHandler =()=> {
    console.log ("clicked");


  }


  
  return (
    <div id="appjs">

          <div className="App">
            <h1>No Face </h1>

            <div id="text-div">
            <textarea id="text-div">Write your story...</textarea>
          </div>


          <button id="button-post" as={Link} to="/Add">Post</button>

          </div>
    </div>
  );
}

export default App;
