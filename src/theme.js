function setDarkMode(...args) {
  const [el, preset] = args;

  const body = document.body;
  const [label, checkbox] = this?.children ?? el.children;

  checkbox.checked = preset ?? checkbox.checked;
  // setTimeout to match animation of light switch
  setTimeout(() => {
    body.classList.toggle('dark', checkbox.checked);
    label.textContent = `lights ${checkbox.checked ? 'on' : 'off'}`;
  }, 450);
}

export const setTheme = () => {
  const lightSwitch = document.getElementById('light-switch');

  lightSwitch.addEventListener('change', setDarkMode);
  lightSwitch.addEventListener('pointerdown', setDarkMode);

  if (window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(lightSwitch, media.matches);

    media.addEventListener('change', ({ matches }) =>
      setDarkMode(lightSwitch, matches)
    );
  }
};
