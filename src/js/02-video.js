import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
console.log(player);

player.on('timeupdate', function (data) {
  console.log(data.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
});
const time = Number(localStorage.getItem('videoplayer-current-time'));
console.log(time);
player.setCurrentTime(time);
