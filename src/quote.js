import data from '../data/quotes.json';

const random = (max) => Math.floor(Math.random() * max);

const getQuote = () => {
  const { stoic, quotes } = data[random(data.length)];

  return {
    stoic,
    quote: quotes[random(quotes.length)],
  };
};

export const buildQuote = () => {
  const { stoic, quote } = getQuote();
  const paragraph = document.createElement('p');
  const footer = document.createElement('footer');
  paragraph.innerText = quote;
  footer.innerText = `– ${stoic}`;

  const blockquote = document.querySelector('blockquote');

  blockquote.appendChild(paragraph);
  blockquote.appendChild(footer);
};
