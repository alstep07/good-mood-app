/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import style from './Button.css';

export default function Button({ text, handleClick }) {
  return (
    <button class={style.button} onclick={() => handleClick()}>
      {text}
    </button>
  );
}
