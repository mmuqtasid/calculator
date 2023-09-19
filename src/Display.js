import React from 'react';

function Display(props) {
  return (
    <div className="display">
      <p>{props.input}</p>
    </div>
  );
}

export default Display;
