import React from 'react';

const buttonStyles = {
  borderColor: '#eee',
  borderWidth: 0,
  outline: 'none'
};

const Button = ({ className, disabled, id, onClick, value, style = {} }) => (
  <button
    id={id}
    className={className}
    style={{ ...buttonStyles, ...style }}
    onClick={onClick}
    disabled={disabled}
  >
    {value}
  </button>
);

export default Button;