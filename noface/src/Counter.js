import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Counter(props) {

  return (
      <div class="like_counter">
        <p><FontAwesomeIcon icon={faStar} size="xs" />&nbsp;{props.count}&nbsp;&nbsp;<span class="cursor_hand" onClick={()=> props.incrementCount()}><FontAwesomeIcon icon={faPlus} size="xs" /></span></p>
      </div> 
    );
}

export default Counter;