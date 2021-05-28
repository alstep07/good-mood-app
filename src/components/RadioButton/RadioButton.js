/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import style from './RadioButton.css';

export default function RadioButton({ name, type, category, handleSwitch, checked }) {
  return (
    <>
      <input
        id={category}
        type={type}
        name={name}
        onchange={e => handleSwitch(e.currentTarget.id)}
        checked={checked}
      />
      <label class={style.label} For={category}>
        {category}
      </label>
    </>
  );
}
