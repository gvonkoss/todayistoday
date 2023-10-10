import domtoimage from 'dom-to-image';

const button = document.getElementById('download');
const card = document.getElementById('card');

const blobToBase64 = (blob) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

button.addEventListener('click', () => {
  button.classList.toggle('snap');
  card.style.borderWidth = 0;
  card.style.visibility = 'hidden';

  domtoimage
    .toBlob(card)
    .then(blobToBase64)
    .then((res) => {
      var link = document.createElement('a');
      link.download = 'today-is-today.png';
      link.href = res;
      link.click();
    });

  setTimeout(() => {
    button.classList.toggle('snap');
    card.style.borderWidth = '1px';
    card.style.visibility = 'visible';
  }, 170);
});
