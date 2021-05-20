/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { setJokePunchLine, setNewRandomJoke } from '../data/jokesData';
import style from './Button.css';

export default function Button({ setup }) {
  const handleClick = setup ? setJokePunchLine : setNewRandomJoke;
  const textContent = setup ? 'Punchline' : 'New joke';

  return (
    <button className={style.button} onclick={() => handleClick()}>
      {textContent}
    </button>
  );
}
