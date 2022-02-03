import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function View(props){

    const buildRows = () =>  {
      return props.posts.map((current) => (

        <div key={current.id}>
        <div class="post_container">
          <div class="post_username">
            {/* USERNAME */}
            {current.username}
              <span class="post_id">
                {/* #ID */}
                {current.id}
              </span>
          </div>
          <div class="post_content">
            {/* CONTENT */}
            {current.content}
          </div>
        </div>
        <div id="spacer"></div>
        </div>

      )
      )
    }
  

        
      {/* <tr key={current.id}>
        <td>
          {current.id}
        </td>
        <td>
          {current.username}
        </td>
        <td>
          {current.content}
        </td>
      </tr> */}

  
      return (

        <div class="container">
        <>
          {buildRows()}
        </>
        </div>
      );
  
  }
  
  export default View;