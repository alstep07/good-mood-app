import React, { useState } from 'react';
import { getRandomJoke } from '../data/jokeAPI';
import { categories, themes } from '../data';
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
  const [theme, setTheme] = useState('themeLight');
  const [joke, setJoke] = useState({});

  const buttonText = setupShown ? 'Punchline' : 'New Joke';

  const handleCategorySwitch = value => {
    setJokeType(value);
  };

  const handleThemeSwitch = value => {
    setTheme(value);
  };

  const handleButtonClick = () => {
    setupShown ? setContent(joke.punchline) : updateContent();
    setSetupShown(!setupShown);
  };

  const updateContent = async () => {
    try {
      setDataLoading(true);
      const [newJoke] = await getRandomJoke(jokeType);
      setContent(newJoke.setup);
      setJoke(newJoke);
      setJokesShown(jokesShown => jokesShown + 1);
    } catch (error) {
      console.error(error.message);
    } finally {
      setDataLoading(false);
    }
  };

  return (
    <div className={`${style.app} ${style[theme]}`}>
      <Title text="Joker" />
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
      <JokeBlock dataLoading={dataLoading} jokeText={content} theme={theme} />
      <Button text={buttonText} handleClick={handleButtonClick} />
      <Counter jokesShown={jokesShown} />
    </div>
  );
}

export default App;
