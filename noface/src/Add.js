import React, {useState} from "react"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add(props) {

    const [state, changeState] = useState({
        id: 0,
        username: "",
        content: ""
    });

    const submitHandler = (event) => {
        event.preventDefault();
        props.addPost(state.id, state.username, state.content);
        changeState({
        id:0,
        username: "",
        content: ""
        }
        )
        window.location = "View";
      }

    const handleChange = (event) => {
        const newState = {...state};
            newState[event.target.name] = event.target.value;
        changeState(newState);
    }
    

    return (
        <div class="container">
  
            <div className="App">
            <div id="header-logo">
                <h1>#NoFace </h1>
            </div>

            <Form onSubmit={(event) => submitHandler(event)}>
                <Form.Group controlId="id">
                    <Form.Control
                        name="id"
                        type="text"
                        placeholder="ID tag"
                        value={state.id}
                        onChange={(event) => handleChange(event)}
                         />
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Control
                        name="content"
                        type="text"
                        placeholder="write your story..."
                        value={state.content}
                        onChange={(event) => handleChange(event)}
                         />
                </Form.Group>
  
                <Form.Group controlId="username">
                    <Form.Control
                        name="username"
                        type="text"
                        placeholder="username"
                        value={state.username}
                        onChange={(event) => handleChange(event)}
                         />
                </Form.Group>
  
                <Button variant="primary" type="submit" className="btn">Post</Button>
               
            </Form>
  
            </div>
  
        </div>
    )
 }
 

export default Add;