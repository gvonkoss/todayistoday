const setDarkMode = (dark) => {
  const body = document.body;
  const state = document.getElementById('switch');

  // setTimeout to match animation of light switch
  setTimeout(() => {
    body.classList.toggle('dark', dark);
    state.innerText = `lights ${dark ? 'on' : 'off'}`;
  }, 450);
};

export const setTheme = () => {
  const toggle = document.getElementById('toggle');

  toggle.addEventListener('change', ({ target }) =>
    setDarkMode(target.checked)
  );

  if (window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    toggle.checked = media.matches;
    setDarkMode(toggle.checked);

    media.addEventListener('change', ({ matches }) => setDarkMode(matches));
  }
};
