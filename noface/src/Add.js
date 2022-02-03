import React, {useState} from "react"; 
//import Form from 'react-bootstrap/Form';


function Add(props) {

    const emptyBox = (elementID) => {
        document.getElementById(elementID).value = ""
      }
      
      const [state, changeState] = useState({
        id: 0,
        username: "",
        content: ""
    });

    const submitHandler = (event) => {
        event.preventDefault();
        props.addTodo(state.id, state.description, state.completed);
        // toastr.success("Item Added");
        changeState({
        id:0,
        description: "",
        completed: false
        }
        )
      }

    const handleChange = (event) => {
        const newState = {...state};
        if (event.target.name === "completed") {
            newState[event.target.name] = !state.completed;
        } else {
            newState[event.target.name] = event.target.value;
        }
        changeState(newState);
    }

    return (
        <div id="container-left">

        <div className="App">
          <div id="header-logo">
            <h1>#NoFace </h1>
          </div>
            <div id="div-textarea">
              <textarea 
              id="story" 
              name="content"
              onClick={() => emptyBox("content")}
              value={state.username}
              onClick={() => emptyBox("story")}>Write your story...</textarea>
            </div>
              <div id="user-button">
                <textarea
                    id="user"
                    name="username"
                    onClick={() => emptyBox("user")}
                    value={state.username}
                    onChange={(event => handleChange(event))}>Username</textarea>&nbsp;

                <button type="submit">Post</button>
              </div>

        </div>
  </div>
    )
}

export default Add;