/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useState, useEffect } from '../framework';
import style from './App.css';
import JokeBlock from './JokeBlock/JokeBlock';
import Button from './Button/Button';
import TypeSwitch from './TypeSwitch/TypeSwitch';
import Counter from './Counter/Counter';

function App() {
  const [jokeType, setJokeType] = useState('general');
  const [content, setContent] = useState('Click the button to get a first joke!');
  const [jokesShown, setJokesShown] = useState(0);
  const [setupShown, setSetupShown] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [theme, setTheme] = useState('light');
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(null);

  const categories = ['general', 'programming'];
  const themes = ['dark', 'light'];

  const handleCategorySwitch = value => {
    setJokeType(value);
  };

  const handleThemeSwitch = value => {
    setTheme(value);
  };

  const handleButtonClick = () => {
    updateContent(joke, setupShown, jokeType);
  };

  const getRandomJoke = async jokeType => {
    const url = getRandomJokeUrl(jokeType);
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      setError(error);
    }
  };

  const getRandomJokeUrl = (jokeType = 'general') => {
    return `https://official-joke-api.appspot.com/jokes/${jokeType}/random`;
  };

  const updateContent = async (joke, setup, jokeType) => {
    let newContent;
    if (setup) {
      newContent = joke.punchline;
    } else {
      try {
        const [newJoke] = await getRandomJoke(jokeType);
        newContent = newJoke.setup;
        setJoke(newJoke);
      } catch (error) {
        newContent = error;
      }
    }
    setSetupShown(!setupShown);
    setContent(newContent);
  };

  return (
    <div class={`${style.app} ${theme === 'dark' ? style.themeDark : style.themeLight}`}>
      <h1 class={style.title}>Good Mood App</h1>
      <div class={style.configBar}>
        <TypeSwitch
          legend="Jokes category:"
          handleSwitch={handleCategorySwitch}
          types={categories}
          name="joke-type"
          currentType={jokeType}
        />
        <TypeSwitch
          legend="Theme:"
          handleSwitch={handleThemeSwitch}
          types={themes}
          name="theme"
          currentType={theme}
        />
      </div>
      <JokeBlock jokeText={content} jokeType={jokeType} />
      <Button text={setupShown ? 'Punchline' : 'New Joke'} handleClick={handleButtonClick} />
      <Counter jokesShown={jokesShown} />
    </div>
  );
}

export default App;
