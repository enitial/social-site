import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Counter(props) {

  return (
      <div class="like_counter">
        <p><FontAwesomeIcon icon={faStar} size="xs" /> {props.count} <span onClick={()=> props.incrementCount()}>+</span></p>
      </div>
    );
}

export default Counter;