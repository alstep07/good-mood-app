import React from 'react';
import style from './RadioButton.css';

export default function RadioButton({ type, value, name, handleSwitch, checked }) {
  return (
    <>
      <input
        id={value}
        type={type}
        name={name}
        onChange={e => handleSwitch(e.target.id)}
        checked={checked}
      />
      <label className={style.label} htmlFor={value}>
        {value}
      </label>
    </>
  );
}
