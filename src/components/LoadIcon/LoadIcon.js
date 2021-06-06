import React from 'react';
import lightLoadIcon from './icons/load_general.gif';
import darkLoadIcon from './icons/load_prog.gif';
import style from './LoadIcon.css';

export default function LoadIcon({ theme }) {
  return (
    <>
      <img
        className={style.loadIcon}
        src={theme === 'dark' ? darkLoadIcon : lightLoadIcon}
        alt="loading"
      />
    </>
  );
}
