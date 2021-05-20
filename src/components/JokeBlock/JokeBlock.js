/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import JokeText from '../JokeText/JokeText';
import style from './JokeBlock.css';
import LoadIcon from '../LoadIcon/LoadIcon';

export default function JokeBlock({ jokeText, jokesType }) {
  return (
    <div className={style.jokeContainer}>
      {dataStore.isDataLoading ? (
        <LoadIcon jokesType={jokesType} />
      ) : (
        <JokeText jokeText={jokeText} />
      )}
    </div>
  );
}
