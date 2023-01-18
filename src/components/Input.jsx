import React from "react";
import CurrencyInput from 'react-currency-input-field';

function Input(props) {
  return (
    <CurrencyInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default Input;
