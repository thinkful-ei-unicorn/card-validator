import React from 'react';
import isValid from './is-valid';

export default function ValidityOutput(props) {
  const numberIsValid = isValid(props.number);
  return (
    <output>The number you entered is {numberIsValid ? 'valid' : 'invalid'}</output>
  );
}