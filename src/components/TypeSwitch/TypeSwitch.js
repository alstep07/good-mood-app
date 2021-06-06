import React from 'react';
import RadioButton from '../RadioButton/RadioButton';
import style from './TypeSwitch.css';

export default function TypeSwitch({ handleSwitch, types, legend, name, currentType }) {
  return (
    <fieldset className={style.fieldset}>
      <legend className={style.title}>{legend}</legend>
      <div className={style.inputs}>
        {types.map(type => (
          <RadioButton
            key={type}
            type="radio"
            value={type}
            name={name}
            handleSwitch={handleSwitch}
            checked={type === currentType}
          />
        ))}
      </div>
    </fieldset>
  );
}
