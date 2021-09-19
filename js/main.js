const searchOpen = document.querySelector('#search-open');
const searchClose = document.querySelector('#search-close');
const form = document.querySelector('#form');


searchOpen.addEventListener('click', () => {
    if(form.style.display === 'none') {
        form.style.display = 'flex';
        console.log('flex')
    } else {
        form.style.display = 'none';
    }
});

searchClose.addEventListener('click', () => {
    if(form.style.display === 'flex') {
        form.style.display = 'none';
    } else {
        form.style.display = 'flex';
    }
});
