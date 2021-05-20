/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import RadioButton from '../RadioButton/RadioButton';
import style from './TypeSwitch.css';

export default function TypeSwitch({ handleChange, jokesType }) {
  return (
    <fieldset className={style.fieldset}>
      <legend className={style.title}>Choose jokes category:</legend>
      <div>
        {['general', 'programming'].map(category => (
          <RadioButton
            type="radio"
            category={category}
            name="jokes-type"
            handleChange={handleChange}
            checked={jokesType === category}
          />
        ))}
      </div>
    </fieldset>
  );
}
