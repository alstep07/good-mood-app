/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import RadioButton from '../RadioButton/RadioButton';
import style from './TypeSwitch.css';

export default function TypeSwitch({ handleSwitch, types, legend, name, currentType }) {
  return (
    <fieldset class={style.fieldset}>
      <legend class={style.title}>{legend}</legend>
      <div class={style.inputs}>
        {types.map(type => (
          <RadioButton
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
