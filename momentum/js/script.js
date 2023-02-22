 //Clock
 function showTime() {
const time = document.querySelector('.time');

const date = new Date();
const currentTime = date.toLocaleTimeString();

const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
setTimeout(showTime, 1000);

//Date
function showDate() {
    const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-US', options);
document.querySelector('.date').innerHTML = currentDate;
 }
 showDate()
  }
 showTime();

 //Greeting
 function showGreeting() {
 const date = new Date();
const hour = date.getHours();
if (hour>=5 && hour<12) greeting = "Good morning"; 
else { 
if (hour>=12 && hour<18) greeting = "Good afternoon"; 
else { 
if (hour>=18 && hour<24) greeting = "Good evening";
else { 
if (hour>=0 && hour<5) greeting = "Good night"; }
       }
    }
    
    document.querySelector('.greeting').innerHTML = greeting;


  function setLocalStorage() {
        let input = document.querySelector('.input');
        input.value = 'name';

        localStorage.setItem('name', name.value);
      }
      window.addEventListener('beforeunload', setLocalStorage);
    
      function getLocalStorage() {
        if(localStorage.getItem('name')) {
            name.value = localStorage.getItem('name');
        }
      }
      window.addEventListener('load', getLocalStorage);
    
 }
 showGreeting()

 