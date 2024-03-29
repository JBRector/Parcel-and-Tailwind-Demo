import React from 'react';

const Button = (props) => {
  const { handleClick, text } = props;

  return (
    <button className="btn" onClick={handleClick}>{text}</button>
  )
}

export default Button;