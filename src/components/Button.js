import style from './Button.css';

export default function Button(setup) {
  return setup
    ? `<button class="${style.button}" onclick="(${setJokePunchLine})()">Punchline</button>`
    : `<button class="${style.button}" onclick="(${setNewRandomJoke})()">Get a joke</button>`;
}
