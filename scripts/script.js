const body = document.querySelector('body');
const nav = document.querySelector('nav');
const button = document.querySelector('#float');

window.addEventListener('scroll', e => {
    if (window.scrollY > 530) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
})

window.addEventListener('scroll', e => {
    if (window.scrollY > 700) {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
})
