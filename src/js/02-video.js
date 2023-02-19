import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
});

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  //   .then(function (seconds) {
  //     seconds = the actual time that the player seeked to  -------> Підкажіть будь-ласка, для чого цей метод
  //   })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
