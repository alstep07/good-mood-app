import dataStore from './data/dataStore';
import App from './components/App';
import renderApp from './framework/render';
import { setJokePunchLine, changeJokesType, setNewRandomJoke } from './data/jokesData';
import getRandomJoke from './data/jokeAPI';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;
window.renderApp = renderApp;
window.setJokePunchLine = setJokePunchLine;
window.setNewRandomJoke = setNewRandomJoke;
window.changeJokesType = changeJokesType;
window.getRandomJoke = getRandomJoke;

renderApp(App, document.getElementById('app-root'));
