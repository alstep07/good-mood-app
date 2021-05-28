/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import style from './Title.css';

export default function Title({ text }) {
  return <h1 class={style.title}>{text}</h1>;
}
