/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import style from './App.css';
import dataStore from '../data/dataStore';
import { setJokeContent } from '../data/jokesData';
import JokeBlock from './JokeBlock/JokeBlock';
import Button from './Button/Button';
import TypeSwitch from './TypeSwitch/TypeSwitch';
import Counter from './Counter/Counter';

function App() {
  const jokeText = setJokeContent(dataStore.jokeText);

  return (
    <div
      className={`${style.app} ${
        dataStore.jokesType === 'programming' ? style.themeDark : style.themeLight
      }`}
    >
      <h1 className={style.title}>Good Mood App</h1>
      <TypeSwitch jokesType={dataStore.jokesType} />
      <JokeBlock jokeText={jokeText} jokesType={dataStore.jokesType} />
      <Button setup={dataStore.setupShown} />
      <Counter jokesShown={dataStore.jokesShown} />
    </div>
  );
}

export default App;
