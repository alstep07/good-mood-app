import React, { useState } from 'react';
import style from './App.css';
import Title from '../components/Title/Title';
import JokeBlock from './JokeBlock/JokeBlock';
import Button from './Button/Button';
import TypeSwitch from './TypeSwitch/TypeSwitch';
import Counter from './Counter/Counter';

function App() {
  const [jokeType, setJokeType] = useState('general');
  const [content, setContent] = useState('Click the button to get a joke!');
  const [jokesShown, setJokesShown] = useState(0);
  const [setupShown, setSetupShown] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [theme, setTheme] = useState('light');
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(null);

  const categories = ['general', 'programming'];
  const themes = ['light', 'dark'];

  const handleCategorySwitch = value => {
    setJokeType(value);
  };

  const handleThemeSwitch = value => {
    setTheme(value);
  };

  const handleButtonClick = () => {
    updateContent(joke, setupShown, jokeType, error);
  };

  const getRandomJoke = async jokeType => {
    const url = getRandomJokeUrl(jokeType);
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      setError(error);
    } finally {
    }
  };

  const getRandomJokeUrl = (jokeType = 'general') => {
    return `https://official-joke-api.appspot.com/jokes/${jokeType}/random`;
  };

  const updateContent = async (joke, setup, jokeType, error) => {
    let newContent;
    if (setup) {
      newContent = joke.punchline;
    } else if (error) {
      newContent = error;
    } else {
      const [newJoke] = await getRandomJoke(jokeType);
      newContent = newJoke.setup;
      setJoke(newJoke);
      setJokesShown(jokesShown => jokesShown + 1);
    }
    setSetupShown(!setupShown);
    setContent(newContent);
  };

  return (
    <div className={`${style.app} ${theme === 'dark' ? style.themeDark : style.themeLight}`}>
      <Title text="Good Mood" />
      <div className={style.configBar}>
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
      <JokeBlock dataLoading={dataLoading} jokeText={content} jokeType={jokeType} />
      <Button text={setupShown ? 'Punchline' : 'New Joke'} handleClick={handleButtonClick} />
      <Counter jokesShown={jokesShown} />
    </div>
  );
}

export default App;
