/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import style from './App.css';
import {
  setJokeContent,
  setJokesType,
  setJokePunchLine,
  setNewRandomJoke,
} from '../data/jokesData';
import JokeBlock from './JokeBlock/JokeBlock';
import Button from './Button/Button';
import TypeSwitch from './TypeSwitch/TypeSwitch';
import Counter from './Counter/Counter';

function App() {
  const [jokeText, setJokeText] = useState('');
  setJokeText(() => setJokeContent(jokeText));

  return (
    <div
      className={`${style.app} ${
        dataStore.jokesType === 'programming' ? style.themeDark : style.themeLight
      }`}
    >
      <h1 className={style.title}>Good Mood App</h1>
      <TypeSwitch jokesType={dataStore.jokesType} handleChange={setJokesType} />
      <JokeBlock jokeText={jokeText} jokesType={dataStore.jokesType} />
      <Button
        text={dataStore.setupShown ? 'Punchline' : 'New Joke'}
        handleClick={dataStore.setupShown ? setJokePunchLine : setNewRandomJoke}
      />
      <Counter jokesShown={dataStore.jokesShown} />
    </div>
  );
}

export default App;
