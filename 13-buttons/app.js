const parent = document.querySelector('.buttons');
const counter = document.querySelector('.counter');
const span = parent.querySelectorAll('.span');

parent.addEventListener('click', (event) => {
    for (let i = 0; i < span.length; i++) {
        span[i].closest('button').classList.remove('btn-red');
        span[i].innerHTML = 'Нажми меня';
    }
    event.target.closest('button').classList.add('btn-red');
    event.target.closest(
        'button'
    ).innerHTML = `<span class="span">Нажата</span>`;
    counter.innerHTML = Number(counter.innerHTML) + 1;
});
