export const buildDate = () => {
  const today = new Date();
  const locale = navigator.language;

  const time = document.querySelector('time');
  time.setAttribute('datetime', today.toISOString());

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const date = {};

  new Intl.DateTimeFormat(locale, options)
    .formatToParts(today)
    .filter((item) => item.type !== 'literal')
    .map((item) => (date[item.type] = item.value));

  for (let item in date) {
    document.getElementById(item).innerText = date[item];
  }
};
