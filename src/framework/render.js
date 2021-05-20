/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from './element';
let Component, Target;

export default function renderApp(componentFunction = null, targetElementId = null) {
  if (componentFunction) Component = componentFunction;
  if (targetElementId) Target = targetElementId;

  Target.innerHTML = '';
  Target.appendChild(<Component />);
}
