/* eslint-disable no-console */
import { getRandomJoke } from './fixtures';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = {
  setupShown: false,
  currentJoke: '',
  jokeText: '',
  category: '',
  jokesShown: 0,
};

window.renderApp = renderApp;
window.showPunchLine = showPunchLine;
window.showRandomJoke = showRandomJoke;

document.getElementById('app-root').innerHTML = App();

function App() {
  return `
    <h1>Good Mood App</h1>
    <p>${dataStore.jokeText || 'Click button to get a joke!'}</p>
    ${Button(dataStore.setupShown)}
    ${dataStore.jokesShown}
  `;
}

function Button(setup) {
  return setup
    ? `<button onclick=showPunchLine()>Punchline</button>`
    : `<button onclick=showRandomJoke()>Get a joke</button>`;
}

function showRandomJoke() {
  dataStore.currentJoke = getRandomJoke('programming');
  dataStore.jokeText = dataStore.currentJoke.setup;
  dataStore.setupShown = true;
  dataStore.jokesShown++;
  renderApp();
}

function showPunchLine() {
  dataStore.jokeText = dataStore.currentJoke.punchline;
  dataStore.setupShown = false;
  renderApp();
}

function renderApp() {
  document.getElementById('app-root').innerHTML = `
    ${App()}
  `;
}
