import { random } from './utils';

export const setDateColor = () => {
  const colors = ['hotpink', 'turquoise', 'gold', 'deepskyblue', 'springgreen'];

  document.querySelector('main').style.backgroundColor =
    colors[random(colors.length)];
};
