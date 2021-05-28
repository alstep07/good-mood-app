/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import RadioButton from '../RadioButton/RadioButton';
import style from './TypeSwitch.css';

export default function TypeSwitch({ handleSwitch, jokeType }) {
  const categories = ['general', 'programming'];

  return (
    <fieldset class={style.fieldset}>
      <legend class={style.title}>Choose jokes category:</legend>
      <div>
        {categories.map(category => (
          <RadioButton
            type="radio"
            category={category}
            name="jokes-type"
            handleSwitch={handleSwitch}
            checked={jokeType === category}
          />
        ))}
      </div>
    </fieldset>
  );
}
