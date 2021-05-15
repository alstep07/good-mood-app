function getRandomJokeUrl(jokeType) {
  return `https://official-joke-api.appspot.com/jokes/${jokeType}/random`;
}

export async function getRandomJoke(jokeType) {
  const url = getRandomJokeUrl(jokeType);
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    dataStore.error = error;
  }
}

export default getRandomJoke;
