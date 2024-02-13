

const eldays = document.getElementById('days');
const elhours = document.getElementById('hours');
const elminutes = document.getElementById('minutes');
const elseconds = document.getElementById('seconds');

function getNextNewYear() {
    const currentYear = new Date().getFullYear();
    return new Date(currentYear + 1, 0, 1);
}

function countdown() {
    const newYearsDate = getNextNewYear();
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, ':', hours, ':', minutes, ':', seconds);

    eldays.innerHTML = formatTime(days);
    elhours.innerHTML = formatTime(hours);
    elminutes.innerHTML = formatTime(minutes);
    elseconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);