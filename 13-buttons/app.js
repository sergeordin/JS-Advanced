const parent = document.querySelector('.buttons');
const buttons = parent.querySelectorAll('.btn');
const counter = document.querySelector('.counter');
const span = parent.querySelectorAll('.span');

parent.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('btn') ||
        event.target.classList.contains('span')
    ) {
        for (let i = 0; i < span.length; i++) {
            if (span[i].closest('button').classList.contains('btn-red')) {
                span[i].closest('button').classList.remove('btn-red');
                span[i].innerHTML = 'Нажми меня';
            }
        }
        event.target.closest('button').classList.add('btn-red');
        event.target.innerHTML = 'Нажата!';
        counter.innerHTML = Number(counter.innerHTML) + 1;
    }
});
