'use strict';

const clock = {
    year: document.getElementById('year'),
    month: document.getElementById('month'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
};

const currentYear = new Date().getUTCFullYear();
const nextYear = new Date(currentYear + 1, 0, 1);

function updateClock() {
    const currentTime = new Date();
    let delta = nextYear - currentTime;

    const monthLeft = new Date(delta).getUTCMonth();
    const daysLeft = new Date(delta).getUTCDate();
    const hoursLeft = new Date(delta).getUTCHours();
    const minutesLeft = new Date(delta).getUTCMinutes();
    const secondsLeft = new Date(delta).getUTCSeconds();

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
