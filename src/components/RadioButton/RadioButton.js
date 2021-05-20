/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import style from './RadioButton.css';

export default function RadioButton({ name, type, category, handleChange, checked }) {
  return (
    <>
      <input
        id={category}
        type={type}
        name={name}
        onchange={e => handleChange(e.currentTarget.id)}
        checked={checked}
      />
      <label className={style.label} For={category}>
        {category}
      </label>
    </>
  );
}
