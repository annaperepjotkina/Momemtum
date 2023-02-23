
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
 }
 showGreeting()

 //Фоновые изображения
 //_______________________________________________________________________
 const body = document.querySelector('body');
 console.log(body);

 body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";


 //Аудио плееер
 //________________________________________________________________________
 const player = document.querySelector ('.player');
 const playBtn = document.querySelector ('.play');
 const prevBtn = document.querySelector ('.play-prev player-icon');
 const nextBtn = document.querySelector ('.play-next');
 const pauseBtn =document.querySelector ('.pause');
 const audio = document.querySelector ('.audio');
 const sounds = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows in You', 'Summer Wind'];

//Назначаем песню по умолчанию
let soundsIndex = 0;
 
function loadSong(sounds) {
  audio.src = `assets/sounds/${sounds}.mp3`;
    console.log(sounds);
}
loadSong(sounds [soundsIndex]);

//console.log(playList);
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
playListItems = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows in You', 'Summer Wind']




 
 
