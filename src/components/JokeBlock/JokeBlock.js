import React from 'react';
import JokeText from '../JokeText/JokeText';
import style from './JokeBlock.css';
import LoadIcon from '../LoadIcon/LoadIcon';

export default function JokeBlock({ jokeText, theme, dataLoading }) {
  return (
    <div className={style.jokeContainer}>
      {dataLoading ? <LoadIcon theme={theme} /> : <JokeText jokeText={jokeText} />}
    </div>
  );
}
