const parent = document.querySelector('.buttons');
const buttons = parent.querySelectorAll('.btn');
const counter = document.querySelector('.counter');

parent.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('btn-red');
            buttons[i].innerHTML = 'Нажми меня';
        }
        event.target.classList.add('btn-red');
        event.target.innerHTML = 'Нажата!';
        counter.innerHTML = Number(counter.innerHTML) + 1;
    }
});
