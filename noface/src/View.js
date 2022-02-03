import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Counter from "./Counter.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';


function View(props){
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
  if((counters.length) < 1) {
    setCounters((prev) => 
      [...prev, {id: counters.length, count: 1}]
    )}  
  };

  const changeCounter = (id, increment) => {
    const updated = counters.map((counter) => {
      if(counter.id === id) {
        if(increment) {
          return {id, count: counter.count+1};
        } else {
          return {id, count:0};
        }
      }
      return counter;
    })
    setCounters(updated);
  }

  const buildCounters = () => {
    return counters.map((counter) =>
      <Counter 
        counterName={`counter${counter.id}`} 
        count={counter.count} 
        key={counter.id} 
        incrementCount={() => changeCounter(counter.id, true)}
        resetCount={() => changeCounter(counter.id, false)}
      />
    )
  }

    const buildRows = () =>  {
      return props.posts.map((current) => (
        <div class="main" key={current.id}>
          <div class="post_container">
              
            <div class="post_username">
              &nbsp;<FontAwesomeIcon icon={faUser} size="xs" />&nbsp;&nbsp;{current.username}
                <span class="post_id">
                  #{current.id}
                </span>
            </div>

            <div class="post_content">
              {current.content}
            </div>

            <hr/>
                {/* Counter */}
                <div>
              <div class="float_left">{buildCounters()}</div>
              
            <div class="post_reaction" onClick={() => addCounter()}>
            <FontAwesomeIcon icon={faThumbsUp} size="xs" />&nbsp;&nbsp;LIKE
            </div>
                </div>

            <div>
            
            </div>

          </div>

            <div id="spacer"></div>
        </div>
      )
      )
    }
      return (

        <div class="view_container">
            {buildRows()}
            {/* {buildCounters()} */}
            {/* <Button variant="primary" onClick={() => addCounter()}>add counter</Button>&nbsp;&nbsp; */}

        </div>
        
      );
  
  }
  
  export default View;