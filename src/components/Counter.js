/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function Counter({ jokesShown }) {
  return <p>Already read jokes: {jokesShown}</p>;
}
