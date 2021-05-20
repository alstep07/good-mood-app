/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import JokeText from './JokeText';
import style from './JokeBlock.css';
import LoadIcon from './LoadIcon';

export default function JokeBlock({ jokeText, jokesType }) {
  return (
    <div className={`${style.jokeContainer} ${jokesType === 'programming' && style.programming}`}>
      {dataStore.isDataLoading ? (
        <LoadIcon jokesType={jokesType} />
      ) : (
        <JokeText jokeText={jokeText} />
      )}
    </div>
  );
}
