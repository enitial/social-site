import React, {useState} from "react"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add(props) {

    // const emptyBox = (elementID) => {
    //     document.getElementById(elementID).value = ""
    //   }
      
      const [state, changeState] = useState({
        id: 0,
        username: "",
        content: ""
    });

    const submitHandler = (event) => {
        event.preventDefault();
        props.addTodo(state.id, state.username, state.content);
        // toastr.success("Item Added");
        changeState({
        id:0,
        username: "",
        content: ""
        }
        )
      }

    const handleChange = (event) => {
        const newState = {...state};
        changeState(newState);
    }
    

    return (
        <div class="container">

            <div className="App">
            <div id="header-logo">
                <h1>#NoFace </h1>
            </div>

            <Form onSubmit={(event) => submitHandler(event)}>
                <Form.Group controlId="story">
                    <Form.Control 
                        name="content"
                        type="text"
                        placeholder="write your story..."
                        //value={}
                        onChange={(event => handleChange(event))}
                         />
                </Form.Group>

                <Form.Group controlId="user">
                    <Form.Control
                        name="username"
                        type="text"
                        placeholder="username"
                        // value={state.username}
                        onChange={(event => handleChange(event))}
                         />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn"><a id="button-post">Post</a></Button>
                
            </Form>

            </div>

        </div>
    )
}

export default Add;