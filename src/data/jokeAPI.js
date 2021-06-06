const getRandomJokeUrl = (jokeType = 'general') => {
  return `https://official-joke-api.appspot.com/jokes/${jokeType}/random`;
};

export const getRandomJoke = async jokeType => {
  const url = getRandomJokeUrl(jokeType);
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
