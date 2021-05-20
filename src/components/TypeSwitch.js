/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { changeJokesType } from '../data/jokesData';

export default function TypeSwitch({ jokesType }) {
  return (
    <>
      <p>Choose jokes category:</p>
      {['general', 'programming'].map(type => (
        <label>
          <input
            id={type}
            type="radio"
            name="jokes-type"
            onchange={e => changeJokesType(e.currentTarget.id)}
            checked={jokesType === type}
          />
          {type}
        </label>
      ))}
    </>
  );
}
