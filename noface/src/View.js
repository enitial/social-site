import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';

function View(props){

const todos = [{id: 1, username: "tester", content: "something to post"},
{id: 2, username: "tester two", content: "extra something to post"}];

    const buildRows = () =>  {
      return props.todos.map((current) => (
        <tr key={current.id}>
          <td>
            {current.id}
          </td>
          <td>
            {current.username}
          </td>
          <td>
            {current.content}
          </td>
        </tr>
      )
      )
    }
  
  
      return (

        <div class="container">
        <>
          <Table striped bordered hover>
            <thead>
              <tr style={{color:"white"}}>
                <th>ID</th>
                <th>Username</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {buildRows()}
            </tbody>
          </Table>
        </>
        </div>
      );
  
  }
  
  export default View;