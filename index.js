/* eslint-disable no-console */
import { getRandomJoke } from './fixtures';

if (module.hot) {
  module.hot.accept();
}

document.getElementById('app-root').innerHTML = App();

window.renderApp = renderApp;

window.dataStore = {
  setupShown: false,
};

function App() {
  return `
    <h1>Good Mood App</h1>
    ${Button(dataStore.setupShown)}
    <p>${window.dataStore.jokeText}</p>
  `;
}

function Button(setup) {
  return setup
    ? `<button onclick=showPunchLine()>Punchline</button>`
    : `<button onclick=showRandomJoke()>Get a joke</button>`;
}

function showRandomJoke() {
  window.dataStore.currentJoke = getRandomJoke();
  window.dataStore.jokeText = window.dataStore.currentJoke.setup;
  window.dataStore.setupShown = !window.dataStore.setupShown;
  renderApp();
}

window.showRandomJoke = showRandomJoke;

function showPunchLine() {
  window.dataStore.jokeText = window.dataStore.currentJoke.punchline;
  window.dataStore.setupShown = !window.dataStore.setupShown;
  renderApp();
}

window.showPunchLine = showPunchLine;

function renderApp() {
  document.getElementById('app-root').innerHTML = `
    ${App()}
  `;
}
