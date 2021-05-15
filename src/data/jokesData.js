export async function setNewRandomJoke() {
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

export function setJokeContent(jokeText) {
  let content = jokeText || 'Click the button to get a joke!';

  if (dataStore.error) {
    content = dataStore.error;
  }

  if (isNewJokeLoaded()) {
    content = jokeText;
  }

  return content;
}

export function isNewJokeLoaded() {
  return dataStore.jokeText && dataStore.currentJoke.punchline !== dataStore.jokeText;
}

export function changeJokesType(inputValue) {
  dataStore.jokesType = inputValue;
}

export function setJokePunchLine() {
  dataStore.jokeText = dataStore.currentJoke.punchline;
  dataStore.setupShown = false;
  renderApp();
}
