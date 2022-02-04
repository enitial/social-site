import React, {useState} from "react"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add(props) {

    const [state, changeState] = useState({
        id: "",
        username: "",
        content: ""
    });

    const submitHandler = (event) => {
        event.preventDefault();
        props.addPost(state.id, state.username, state.content);
        changeState({
        id:0,
        username: "",
        content: "",
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
       
        <div class="add_container">
  
            <div className="App">
            <div id="header-logo">
                <h1>#NoFace </h1>
            </div>

            <Form onSubmit={(event) => submitHandler(event)}>
                <Form.Group controlId="id">
                    <Form.Control
                        id="add_id"
                        name="id"
                        type="number"
                        placeholder="ID"
                        value={state.id}
                        onChange={(event) => handleChange(event)}
                        style={{margin:"5px"}}
                         />
                </Form.Group>
                <div>
                <Form.Group controlId="username">
                    <Form.Control
                        id="add_username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={state.username}
                        onChange={(event) => handleChange(event)}
                        style={{margin:"5px"}}
                         />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Control
                        id="add_content"
                        name="content"
                        type="text"
                        placeholder="Write your story..."
                        value={state.content}
                        style={{margin:"5px"}}
                        onChange={(event) => handleChange(event)}
                        as="textarea" rows="3"
                         />
                </Form.Group>
                </div>
  
                <Button variant="primary" type="submit" className="btn">Post</Button>
               
            </Form>
  
            </div>
  
        </div>
    )
 }
 

export default Add;