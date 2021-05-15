import style from '../style.css';
import dataStore from '../data/dataStore';
import { setJokeContent } from '../data/jokesData';
import JokeBlock from './JokeBlock';
import Button from './Button';
import TypeSwitch from './TypeSwitch';
import Counter from './Counter';

function App() {
  const jokeContent = setJokeContent(dataStore.jokeText);

  return `
    <div class="${style.app}">
      <h1 class=${style.appTitle}>Good Mood App</h1>
      ${TypeSwitch()}
      ${JokeBlock(jokeContent, dataStore.jokesType)}
      ${Button(dataStore.setupShown)}
      ${Counter(dataStore.jokesShown)}
    </div>
  `;
}

export default App;
