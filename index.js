/* eslint-disable no-console */
import { getRandomJoke } from './fixtures';
import style from './style.css';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = {
  setupShown: false,
  currentJoke: '',
  jokeText: '',
  jokesShown: 0,
  jokesType: 'general',
  shownIds: [],
};

window.renderApp = renderApp;
window.showPunchLine = showPunchLine;
window.showRandomJoke = showRandomJoke;
window.changeJokesType = changeJokesType;

document.getElementById('app-root').innerHTML = App(dataStore);

function App({ setupShown, jokesShown, jokeText, jokesType }) {
  return `
    <div class="${style.app}">
      <h1 class=${style.app_title}>Good Mood App</h1>
      ${TypeSwitch()}
      ${Joke(jokeText, jokesType)}
      ${Button(setupShown)}
      ${Counter(jokesShown)}
    </div>
  `;
}

function Joke(jokeText, jokeType) {
  return `
    <div class="${style.app_joke} ${jokeType === 'programming' && style.programming}">
      <p >${jokeText || 'Click the button to get a joke!'}</p>
    </div>`;
}

function Button(setup) {
  return setup
    ? `<button class="${style.app_button}" onclick=showPunchLine()>Punchline</button>`
    : `<button class="${style.app_button}" onclick=showRandomJoke()>Get a joke</button>`;
}

function Counter(jokesShown) {
  return `<p>Already read jokes: ${jokesShown}`;
}

function TypeSwitch() {
  return `
    <p>Choose jokes category:</p>
    ${['general', 'programming']
      .map(
        type =>
          `<label>
            <input
            id='${type}'
            type='radio'
            name='jokes-type'
            onchange='(${changeJokesType})(this.id);'
            ${dataStore.jokesType === type ? 'checked' : ''}>
            ${type}
          </label>
        `,
      )
      .join('')}
  `;
}

function changeJokesType(inputValue) {
  dataStore.jokesType = inputValue;
}

function showRandomJoke() {
  let newJoke;
  while (!newJoke || dataStore.shownIds.includes(newJoke.id)) {
    newJoke = getRandomJoke(dataStore.jokesType);
  }
  dataStore.shownIds = [...dataStore.shownIds, newJoke.id];
  dataStore.currentJoke = newJoke;
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
    ${App(dataStore)}
  `;
}
