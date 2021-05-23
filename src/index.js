import App from './components/App';
import { render } from './framework';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;

render(App, document.getElementById('app-root'));
