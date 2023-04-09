const parent = document.querySelector('.buttons');
const buttons = parent.querySelectorAll('.btn');
const counter = document.querySelector('.counter');

parent.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('btn')) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('btn-red');
        }
        target.classList.add('btn-red');
        counter.innerHTML = Number(counter.innerHTML) + 1;
    }
});
