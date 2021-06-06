import React from 'react';
import style from './Title.css';

export default function Title({ text }) {
  return <h1 className={style.title}>{text}</h1>;
}
