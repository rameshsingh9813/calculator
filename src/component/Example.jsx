import React, { useState} from 'react';
import $ from 'jquery';

function Example() {
  const [count, setCount] = useState('');

    $(document).ready(function() {
    $("button").click(function() {
      var currentButton = $(this);
      setCount(count+currentButton[0].value)
    });
  });
  
  const increaser=() => {
    setCount(eval(count))
  }
  return (
    <div>
        <div className="container"> 
      <h2> {count} </h2>
      <button type="button" className="btn btn-outline-secondary" value={8}>8</button>
      <button type="button" className="btn btn-outline-secondary" value={7}>7</button>
      <button type="button" className="btn btn-outline-secondary" value={'+'}>+</button>
      <button onClick={increaser}>Evaluate</button>
      </div>
    </div>
  );
}

export default Example;