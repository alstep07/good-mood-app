/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import style from './Button.css';

export default function Button({ text, handleClick }) {
  return (
    <button className={style.button} onclick={() => handleClick()}>
      {text}
    </button>
  );
}
