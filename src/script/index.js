import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/pre-loading';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
  await swRegister();

  const preloader = document.querySelector('pre-loading');

  setTimeout(() => {
    preloader.classList.add('loader-hidden');

    preloader.addEventListener('transitionend', () => {
      document.body.removeChild(preloader);
    });
  }, 1000);
});
