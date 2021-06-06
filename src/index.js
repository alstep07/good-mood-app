import React from 'react';
import App from './components/App';
import { render } from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('app-root'));
