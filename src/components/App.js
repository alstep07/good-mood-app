/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import style from '../style.css';
import dataStore from '../data/dataStore';
import { setJokeContent } from '../data/jokesData';
import JokeBlock from './JokeBlock';
import Button from './Button';
import TypeSwitch from './TypeSwitch';
import Counter from './Counter';

function App() {
  const jokeText = setJokeContent(dataStore.jokeText);

  return (
    <div className={style.app}>
      <h1 className={style.appTitle}>Good Mood App</h1>
      <TypeSwitch jokeType={dataStore.jokesType} />
      <JokeBlock jokeText={jokeText} jokesType={dataStore.jokesType} />
      <Button setup={dataStore.setupShown} />
      <Counter jokesShown={dataStore.jokesShown} />
    </div>
  );
}

export default App;
