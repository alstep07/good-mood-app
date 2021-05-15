import JokeText from './JokeText';
import style from './JokeBlock.css';
import LoadIcon from './LoadIcon';

export default function JokeBlock(jokeText, jokeType) {
  return `
    <div class="${style.jokeContainer} ${jokeType === 'programming' && style.programming}">
      ${dataStore.isDataLoading ? LoadIcon() : JokeText(jokeText)}
    </div>`;
}
