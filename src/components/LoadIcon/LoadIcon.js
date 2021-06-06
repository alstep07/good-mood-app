import React from 'react';
import generalLoadIcon from './icons/load_general.gif';
import progLoadIcon from './icons/load_prog.gif';
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
