import data from '../data/quotes.json';
import { random } from './utils';

const getQuote = () => {
  const { stoic, quotes } = data[random(data.length)];

  return {
    stoic,
    quote: quotes[random(quotes.length)],
  };
};

export const buildQuote = () => {
  const { stoic, quote } = getQuote();
  paragraph.innerText = quote;
  footer.innerText = `– ${stoic}`;
};

export const refreshQuote = () => {
  const button = document.getElementById('refresh');

  button.addEventListener('click', () => {
    button.classList.add('refresh');
    button.setAttribute('disabled', '');

    buildQuote();

    setTimeout(() => {
      button.classList.remove('refresh');
      button.removeAttribute('disabled');
    }, 500);
  });
};

const paragraph = document.getElementById('quote');
const footer = document.getElementById('stoic');
