import App from './components/App';
import { render } from './framework';

if (module.hot) {
  module.hot.accept();
}

render(App, document.getElementById('app-root'));
