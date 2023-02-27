const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const watch = setInterval(function time(){
    let dateToday = new Date();
    let time = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (time < 10) time = "0" + time;

    if (min < 10) min = "0" + min;

    if (sec < 10) sec = "0" + sec;


    hour.textContent = time;
    minute.textContent = min;
    second.textContent = sec;
});