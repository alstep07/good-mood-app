import React from 'react';
import style from './JokeText.css';

export default function JokeText({ jokeText }) {
  return <p className={style.jokeText}>{jokeText}</p>;
}
