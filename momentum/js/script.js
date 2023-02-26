
 //Часы
 //________________________________________________________________________
 function showTime() {
const time = document.querySelector('.time');

const date = new Date();
const currentTime = date.toLocaleTimeString();

const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
setTimeout(showTime, 1000);

//Календарь
//________________________________________________________________________
function showDate() {
    const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-US', options);
document.querySelector('.date').innerHTML = currentDate;
 }
 showDate()
  }
 showTime();

 //Приветствие
 //________________________________________________________________________
 function showGreeting() {
 const date = new Date();
const hour = date.getHours();
if (hour>=5 && hour<12) {
  greeting = 'Good morning'
} else if (hour>=12 && hour<18) {
  greeting = 'Good afternoon'
} else if (hour>=18 && hour<24) {
  greeting = 'Good evening'
} else if (hour>=0 && hour<5) {
  greeting = 'Good night'
}
    document.querySelector('.greeting').innerHTML = greeting;
 }
 showGreeting()

 //Фоновые изображения
 //_______________________________________________________________________
 function getTimeOfDay() {
  const date = new Date();
 const hour = date.getHours();
 if (hour>=5 && hour<12) {
   return 'morning'
 } else if (hour>=12 && hour<18) {
   return 'afternoon'
 } else if (hour>=18 && hour<24) {
   return 'evening'
 } else if (hour>=0 && hour<5) {
   return  'night'
 }
} 
console.log(getTimeOfDay())

let randomNum;
function getRandomNum(min, max) {
     min = Math.ceil(1);
    max = Math.floor(20);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  getRandomNum(1, 20);
  
 
  function setBg() {
    let timeOfDay = getTimeOfDay();
    let bgNum = getRandomNum().toString().padStart(2, '0');
    const img =new Image();
    img.src = `https://raw.githubusercontent.com/annaperepjotkina/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
  const body = document.querySelector('body');
  body.style.backgroundImage = `url("${img.src}")`;
  console.log(bgNum)
}
  }
  setBg()
  
  function getSlideNext() {
    randomNum++;
    setBg();
  }
  document.querySelector('.slide-next').addEventListener('click', getSlideNext)

  function getSlidePrev() {
    randomNum--;
    setBg();
  }
  document.querySelector('.slide-prev').addEventListener('click', getSlidePrev)

  //Виджет "цитата дня"
  //________________________________________________________________________
  /*const quot = document.querySelector('.quote');
  const author = document.querySelector('.author');
  const changeQuoteBtn = document.querySelector('.change-quote');
  
  async function getQuotes() {  
    const quotes = './data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  getQuotes();*/


  //Погода
  //________________________________________________________________________
  const apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&APPID=70b998951408ec5dda1b13148cbb1384&units=metric`;
  const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

  async function getWeather() {  
    const apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&APPID=70b998951408ec5dda1b13148cbb1384&units=metric`;
    const res = await fetch(apiWeather);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  }
  getWeather()

  

 //Аудио плееер
 //________________________________________________________________________
 const player = document.querySelector ('.player');
 const playBtn = document.querySelector ('.play');
 const prevBtn = document.querySelector ('.play-prev player-icon');
 const nextBtn = document.querySelector ('.play-next');
 const pauseBtn =document.querySelector ('.pause');
 const audio = document.querySelector ('.audio');
 const progress_container = document.querySelector ('.progress_container')
 const progress_bar = document.querySelector ('.progress_bar')
 const title = document.querySelector ('.title')
 const sounds = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows in You', 'Summer Wind'];

//Назначаем песню по умолчанию
let soundsIndex = 0;
 
function loadSong(sounds) {
  audio.src = `assets/sounds/${sounds}.mp3`;
    console.log(sounds);
    title.innerHTML = sounds;
}
loadSong(sounds [soundsIndex]);

let isPlay = false; //Создаем флаг - при загрузке не проигрывается

function playAudio() {
  audio.currentTime = 0; //Чтобы мелодия всегда начиналась сначала
  audio.play();
  isPlay = true;
}
function pauseAudio() {
  audio.pause();
  isPlay = false;
}
//При нажатии на кнопку мелодия играет или останавливается
playBtn.addEventListener('click', () => {
  if(!isPlay) {
    playAudio()
  } else {
    pauseAudio()
  }
});

//Меняем кнопку плей на кнопку пауза
function toggleBtn() {
  playBtn.classList.toggle('pause');
}
playBtn.addEventListener('click', toggleBtn);

//Переключение мелодий (средыдущая, следующая)
function playNext() {
  soundsIndex ++;
  if (soundsIndex > sounds.length -1) {
    soundsIndex = 0
  }
  loadSong(sounds [soundsIndex]);
  playAudio();
}

document.querySelector('.play-next').addEventListener('click', playNext);

function playPrev() {
  soundsIndex--;
  if (soundsIndex < 0) {
    soundsIndex = sounds.length -1
  }
  loadSong(sounds [soundsIndex]);
  playAudio();
}

document.querySelector('.play-prev').addEventListener('click', playPrev);

//Перечень треков
const playListItems = document.querySelector('.play-item')
//playListItems = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows in You', 'Summer Wind']

//Прогресс бар
function updateProgress (event) {
const {duration, currentTime} = event.srcElement
const progressPercent = (currentTime / duration) * 100;
progress_bar.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgress )

//Перемотка
function setProgress (e) {
const width = this.clientWidth;//Находим длину контейнера
const click = e.offsetX; //Находим координаты клика по оси Х
const duration = audio.duration;//Получим длину трека

audio.currentTime = (click / width) * duration;
}
progress_container.addEventListener('click', setProgress)

 
 //Чтобы после окончания одной песни начинала проигрываться следующая
audio.addEventListener('ended', playNext)
console.log(audio.duration)

volumeMute = document.querySelector('.volume-mute').addEventListener('click', pauseAudio)