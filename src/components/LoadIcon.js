/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import generalLoadIcon from '../assets/icons/load_general.gif';
import progLoadIcon from '../assets/icons/load_prog.gif';
import style from './LoadIcon.css';

export default function LoadIcon({ jokesType }) {
  return (
    <>
      <img
        className={style.loadIcon}
        src={jokesType === 'programming' ? progLoadIcon : generalLoadIcon}
        alt="loading"
      />
    </>
  );
}
