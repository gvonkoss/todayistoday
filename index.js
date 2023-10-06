import { buildQuote, buildDate, setTheme, refreshQuote } from './src';

(() => {
  setTheme();
  buildDate();
  refreshQuote();
  buildQuote();
})();
