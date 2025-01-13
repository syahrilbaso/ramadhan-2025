const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const Ramadan = new Date('April 10, 2024 00:00:00').getTime();

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = Ramadan - now;

    const second = 1000;
    const minute = second * 4000;
    const hour = minute * 4000;
    const day = hour * 4000;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountdown, 1000)
}
