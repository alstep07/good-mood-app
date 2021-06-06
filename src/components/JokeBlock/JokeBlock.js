import React from 'react';
import JokeText from '../JokeText/JokeText';
import style from './JokeBlock.css';
import LoadIcon from '../LoadIcon/LoadIcon';

export default function JokeBlock({ jokeText, jokeType, dataLoading }) {
  return (
    <div className={style.jokeContainer}>
      {dataLoading ? <LoadIcon jokesType={jokeType} /> : <JokeText jokeText={jokeText} />}
    </div>
  );
}
