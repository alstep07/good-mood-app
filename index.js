/* eslint-disable no-console */
import style from './style.css';
import generalLoadIcon from './load_general.gif';
import progLoadIcon from './load_prog.gif';

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
  error: null,
  isDataLoading: false,
};

window.renderApp = renderApp;
window.setJokePunchLine = setJokePunchLine;
window.setNewRandomJoke = setNewRandomJoke;
window.changeJokesType = changeJokesType;

document.getElementById('app-root').innerHTML = App(dataStore);

function App({ setupShown, jokesShown, jokeText, jokesType }) {
  return `
    <div class="${style.app}">
      <h1 class=${style.appTitle}>Good Mood App</h1>
      ${TypeSwitch()}
      ${JokeBlock(jokeText, jokesType)}
      ${Button(setupShown)}
      ${Counter(jokesShown)}
    </div>
  `;
}

function LoadIcon() {
  return `
    <img
      class="${style.loadIcon}"
      src="${dataStore.jokesType === 'programming' ? progLoadIcon : generalLoadIcon}"
      alt="loading">
  `;
}

function JokeBlock(jokeText, jokeType) {
  return `
    <div class="${style.jokeContainer} ${jokeType === 'programming' && style.programming}">
      ${dataStore.isDataLoading ? LoadIcon() : JokeText(jokeText)}
    </div>`;
}

function JokeText(jokeText) {
  return `
    <p class="${style.jokeText}">${setJokeContent(jokeText)}<span class="${
    style.jokeUnderscore
  }">&nbsp;</span></p>
  `;
}

function setJokeContent(jokeText) {
  let content = jokeText || 'Click the button to get a joke!';

  if (dataStore.error) {
    content = dataStore.error;
  }

  if (isNewJokeLoaded()) {
    content = jokeText;
  }

  return content;
}

function Button(setup) {
  return setup
    ? `<button class="${style.appButton}" onclick=setJokePunchLine()>Punchline</button>`
    : `<button class="${style.appButton}" onclick=setNewRandomJoke()>Get a joke</button>`;
}

function Counter(jokesShown) {
  return `<p>Already read jokes: ${jokesShown}</p>`;
}

function TypeSwitch() {
  const typeInputComponents = ['general', 'programming']
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
    .join('');

  return `
    <p>Choose jokes category:</p>
    ${typeInputComponents}
  `;
}

async function getRandomJoke(jokeType) {
  const url = getRandomJokeUrl(jokeType);
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    dataStore.error = error;
  }
}

function isNewJokeLoaded() {
  return dataStore.jokeText && dataStore.currentJoke.punchline !== dataStore.jokeText;
}

function getRandomJokeUrl(jokeType) {
  return `https://official-joke-api.appspot.com/jokes/${jokeType}/random`;
}

function changeJokesType(inputValue) {
  dataStore.jokesType = inputValue;
}

async function setNewRandomJoke() {
  dataStore.isDataLoading = true;
  let newJoke;
  while (!newJoke || dataStore.shownIds.includes(newJoke.id)) {
    renderApp();
    [newJoke] = await getRandomJoke(dataStore.jokesType);
  }
  dataStore.shownIds = [...dataStore.shownIds, newJoke.id];
  dataStore.currentJoke = newJoke;
  dataStore.jokeText = dataStore.currentJoke.setup;
  dataStore.setupShown = true;
  dataStore.isDataLoading = false;
  dataStore.jokesShown++;
  renderApp();
}

function setJokePunchLine() {
  dataStore.jokeText = dataStore.currentJoke.punchline;
  dataStore.setupShown = false;
  renderApp();
}

function renderApp() {
  document.getElementById('app-root').innerHTML = `
    ${App(dataStore)}
  `;
}
