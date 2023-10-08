import { random } from './utils';

const colors = ['hotpink', 'turquoise', 'gold', 'deepskyblue', 'springgreen'];
const color = colors[random(colors.length)];

const setDarkMode = (on) => {
  const styles = document.documentElement.style;
  const state = document.getElementById('switch');

  setTimeout(() => {
    if (on) {
      state.innerText = 'lights on';
      styles.setProperty('--flash-color', color);
      styles.setProperty('--text-color', color);
      styles.setProperty('--card-color', 'black');
      styles.setProperty('--background-color', 'black');
    } else {
      state.innerText = 'lights off';
      styles.setProperty('--flash-color', 'black');
      styles.setProperty('--text-color', 'black');
      styles.setProperty('--card-color', color);
      styles.setProperty('--background-color', 'beige');
    }
  }, 450);
};

export const setTheme = () => {
  const [toggle] = document.getElementsByTagName('input');

  toggle.addEventListener(
    'change',
    ({ target }) =>
      console.log('checked', target.checked) || setDarkMode(target.checked)
  );

  if (window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    toggle.checked = media.matches;
    setDarkMode(toggle.checked);

    media.addEventListener('change', ({ matches }) => setDarkMode(matches));
  }
};
