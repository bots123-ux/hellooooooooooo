const envelopeFront = document.querySelector('.envelope-front');
const envelopeBack = document.querySelector('.envelope-back');

envelopeFront.addEventListener('click', () => {
    envelopeFront.style.display = 'none';
    envelopeBack.style.display = 'block';
});