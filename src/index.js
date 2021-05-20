import dataStore from './data/dataStore';
import App from './components/App';
import renderApp from './framework/render';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;

renderApp(App, document.getElementById('app-root'));
