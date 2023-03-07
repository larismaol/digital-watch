const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const watch = setInterval(function time(){
    let dateToday = new Date();
    let time = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
   
    time = time.toString().padStart(2, "0");

    hour.textContent = time;
    minute.textContent = min;
    second.textContent = sec;
});
