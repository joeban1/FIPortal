import React, { useState } from 'react';

function Button(props) {
  return (
      <button onClick={props.onClick}>
        Add row
      </button>
  );
}

export default Button;
