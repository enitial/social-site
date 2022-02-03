import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function View(props){

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
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
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
      );
  
  }
  
  export default View;