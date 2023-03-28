'use strict';

const clock = {
    year: document.getElementById('year'),
    month: document.getElementById('month'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
};

const currentYear = new Date().getFullYear();
const nextYear = new Date(currentYear + 1, 0, 1);

function updateClock() {
    const currentTime = new Date();
    let delta = nextYear - currentTime;

    const monthLeft = Math.floor(delta / 1000 / 60 / 60 / 24 / 30);
    const daysLeft = Math.floor(delta / 1000 / 60 / 60 / 24) % 30;
    const hoursLeft = Math.floor(delta / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(delta / 1000 / 60) % 60;
    const secondsLeft = Math.floor(delta / 1000) % 60;

    console.log(
        new Intl.DateTimeFormat('ru-RU', {
            minute: 'numeric',
            second: 'numeric',
        }).format(secondsLeft)
    );

    clock.year.innerText = currentYear + 1;

    clock.month.innerText = monthLeft;
    clock.days.innerText = daysLeft;
    clock.hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    clock.minutes.innerText =
        minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    clock.seconds.innerText =
        secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateClock();
setInterval(updateClock, 900);
