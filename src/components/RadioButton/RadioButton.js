/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import style from './RadioButton.css';

export default function RadioButton({ type, value, name, handleSwitch, checked }) {
  return (
    <>
      <input
        id={value}
        type={type}
        name={name}
        onchange={e => handleSwitch(e.currentTarget.id)}
        checked={checked}
      />
      <label class={style.label} For={value}>
        {value}
      </label>
    </>
  );
}
