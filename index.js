import { buildQuote, buildDate, setTheme, refreshQuote } from './src';

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    setTheme();
    buildDate();
    buildQuote();
  });
  refreshQuote();
})();
