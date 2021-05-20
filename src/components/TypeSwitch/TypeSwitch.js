/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { setJokesType } from '../../data/jokesData';
import style from './TypeSwitch.css';

export default function TypeSwitch({ jokesType }) {
  return (
    <fieldset className={style.fieldset}>
      <legend className={style.title}>Choose jokes category:</legend>
      <div>
        {['general', 'programming'].map(type => (
          <>
            <input
              id={type}
              type="radio"
              name="jokes-type"
              onchange={e => setJokesType(e.currentTarget.id)}
              checked={jokesType === type}
            />
            <label className={style.label} For={type}>
              {type}
            </label>
          </>
        ))}
      </div>
    </fieldset>
  );
}
