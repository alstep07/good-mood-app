/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import style from './Counter.css';

export default function Counter({ jokesShown }) {
  return <p class={style.text}>Already read jokes: {jokesShown}</p>;
}
