import style from './JokeText.css';

export default function JokeText(jokeText) {
  return `
    <p class="${style.jokeText}">${jokeText}</p>
  `;
}
