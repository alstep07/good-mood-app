/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import JokeText from '../JokeText/JokeText';
import style from './JokeBlock.css';
import LoadIcon from '../LoadIcon/LoadIcon';

export default function JokeBlock({ jokeText, jokeType, dataLoading }) {
  return (
    <div class={style.jokeContainer}>
      {dataLoading ? <LoadIcon jokesType={jokeType} /> : <JokeText jokeText={jokeText} />}
    </div>
  );
}
