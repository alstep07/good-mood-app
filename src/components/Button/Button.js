import React from 'react';
import style from './Button.css';

export default function Button({ text, handleClick }) {
  return (
    <button className={style.button} onClick={handleClick}>
      {text}
    </button>
  );
}
