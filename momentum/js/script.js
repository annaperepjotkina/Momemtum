 function showTime() {
const time = document.querySelector('.time');

const date = new Date();
const currentTime = date.toLocaleTimeString();

const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
setTimeout(showTime, 1000);

function showDate() {
    const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-US', options);
document.querySelector('.date').innerHTML = currentDate;
 }
 showDate()
  }
 showTime();

