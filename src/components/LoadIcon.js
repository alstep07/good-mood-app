import generalLoadIcon from '../assets/icons/load_general.gif';
import progLoadIcon from '../assets/icons/load_prog.gif';
import style from './LoadIcon.css';

export default function LoadIcon() {
  return `
    <img
      class="${style.loadIcon}"
      src="${dataStore.jokesType === 'programming' ? progLoadIcon : generalLoadIcon}"
      alt="loading">
  `;
}
