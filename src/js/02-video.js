import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000)
);

const playedTime = localStorage.getItem('videoplayer-current-time');
console.log(playedTime);

const stoppedTime = JSON.parse(playedTime);
// console.log(stoppedTime.seconds);

player.setCurrentTime(stoppedTime.seconds || 0);
