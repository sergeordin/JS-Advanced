const parent = document.querySelector('.buttons');
const counter = document.querySelector('.counter');
const span = parent.querySelectorAll('.span');
const btns = parent.querySelectorAll('.btn');

parent.addEventListener('click', (event) => {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('btn-red');
        btns[i].innerHTML = 'Нажми меня';
    }
    event.target.closest('button').classList.add('btn-red');
    event.target.innerHTML = `<span class="span">Нажата</span>`;

    counter.innerHTML = Number(counter.innerHTML) + 1;
});
