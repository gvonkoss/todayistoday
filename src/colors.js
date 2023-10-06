import { random } from './utils';

const colors = ['hotpink', 'turquoise', 'gold', 'deepskyblue', 'springgreen'];

const card = document.querySelector('#card');

const setDarkMode = (on) => {
  const color = colors[random(colors.length)];

  if (on) {
    document.documentElement.style.setProperty('--text-color', color);
    document.documentElement.style.setProperty('--background-color', 'black');
    // document.body.style.backgroundColor = 'black';
    // card.style.backgroundColor = 'black';
    // card.style.color = color;
  } else {
    document.documentElement.style.setProperty('--text-color', 'black');
    document.documentElement.style.setProperty('--background-color', color);
    // card.style.backgroundColor = color;
    // card.style.color = 'black';
  }
};

export const setDateColor = () => {
  if (window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const darkMode = media.matches;

    darkMode ? setDarkMode(true) : setDarkMode(false);

    media.addEventListener('change', (e) => {
      e.matches ? setDarkMode(true) : setDarkMode(false);
    });
  }
};
