<template>
  <div class="header">
    <meta charset="utf-8"/>
    <meta name="description" content="Epyh vous propose d'avoir votre propre personal shopper afin de devenir le meilleur des Hypebeasts, Vous allez également pouvoir suivre toute l'actualité de l'univers Hypebeast"/>
    <meta name="author" content="Bastien GUILLAUME" />
    <meta name="copyright" content="Copyright (c) Epyh 2021-2021 " />
    <meta name="robots" content="index,noodp,follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />




    <div class="player">
      <audio class="player__audio viewer">
        <source src="https://www.bensound.com/bensound-music/bensound-ukulele.mp3" type="audio/mpeg" data-trackid="1">
        Votre navigateur ne supporte pas l'audio
      </audio>

      <span @click="displayOff()">x</span>
      <div class="song-panel">
        <div class="song-info">
          <div class="song-info__title">HyperTime #1 </div>
          <div class="song-info__artist">EPYH</div>
          <div class="progress">
            <div class="progress__filled"></div>
          </div>
        </div>
      </div>
      <div class="player-controls">
        <div class="spinner">
          <div class="spinner__disc"		>
            <div class="center__disc"></div>
          </div>
        </div>
        <button class="backward"><i class="fas fa-backward fa-2x"></i></button>
        <button class="play">
          <i class="fas fa-play fa-3x"></i>
          <span class="pause left"></span>
          <span class="pause right"></span>
        </button>
        <button class="forward"><i class="fas fa-forward fa-2x"></i></button>
      </div>
    </div>

    <div class="player_content">
      <img width="50px" @click="toggle_player()" class="podcast_player fa-podcast" src="https://smarthome-europe.com/wp-content/uploads/2020/04/spotify-logo-sans-texte.png" alt="">
    </div>
    <img alt="Epyh" src="../../assets/img/logo.png" class="logo image is-64x64">
    <div class="head">
      <span class="date">2021</span>
      <span class="hypePower">Hype Power</span>
    </div>
    <span class="hypebeast">HypeBeast</span>
    <br>
    <!-- <button class="btn">Découvrir notre site </button>  -->
  </div>
</template>

<script>
// import('../../assets/player.js');
export default {
  name: 'Header',
  async mounted() {

    const tracks = [
      {
        id: '1',
        title: 'Hypetime #1',
        artist: 'EPYH',
        src: '',
        cover: '../assets/logo.png'
      },
      {
        id: '2',
        title: 'Hypetime #1',
        artist: 'EPYH',
        src: 'https://r2---sn-25glen7r.c.drive.google.com/videoplayback?expire=1624024309&ei=tWzMYMzmC8PywtQPkqOxkAE&ip=185.226.32.21&cp=QVRHVkFfU1NOSlhPOk5lN3NYR1N1VUszenpMUEQtcmFDV0lDOU5FSEtyQVZKV0x5c21IQlJOWDQ&id=219469f84e128429&itag=18&source=webdrive&requiressl=yes&mh=F4&mm=32&mn=sn-25glen7r&ms=su&mv=u&mvi=2&pl=22&ttl=transient&susc=dr&driveid=1m3vs3omgTLACiO62Uro1pVo6zrZkmM2_&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=267.099&lmt=1623836517207807&mt=1624009696&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhALuWY2eFSyXoq5-APLbeg72njFB1B1Og1G3Ij0vEmmUOAiBW2LByDU4LzzKzn7lnI8yq4iga5QxCyKkjWADACKQc4Q==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgUnYvj8B90YtFbCdxuCQn19CxcN58Podk5nOYe4GhqrsCIQDf2YTBv3IDSmgmDV6bgaVKpKyOefDoC-qToF4X2jjo7A==&cpn=FLhzy6WTTO3s83N_&c=WEB_EMBEDDED_PLAYER&cver=1.20210616.1.0',
        cover: 'https://lh3.google.com/u/0/d/16zCkZ2eUvGomLb8R3MVAuuHZ2CAmPyhq=w1920-h953-iv1'
      },
    ];
    const player = document.querySelector('.player');
    const audio = player.querySelector('.player__audio');
    const audioSource = audio.querySelector('source');
    const songPanel = player.querySelector('.song-panel');
    const songTitle = player.querySelector('.song-info__title');
    const songArtist = player.querySelector('.song-info__artist');
    const backButton = player.querySelector('.backward');
    const playButton = player.querySelector('.play');
    const forwardButton = player.querySelector('.forward');
    const spinner = player.querySelector('.spinner');
    const spinnerDisc = player.querySelector('.spinner__disc');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');

    let playing = false;
    let trackSwitch = false;

    const togglePlay = () => {
      // Play / pause the audio
      const method = audio.paused ? 'play' : 'pause';
      playing = audio.paused ? true : false;
      audio[method]();
    };

    const toggleSongPanel = () => {

      if (!trackSwitch) {
        // Scale the disc
        spinnerDisc.classList.toggle('scale');

        // Show / hide song panel
        songPanel.classList.toggle('playing');

        // Change button icon
        playButton.classList.toggle('playing');
      }
    };

    const startSpin = () => {
      // Start spinning the disc
      spinner.classList.add('spin');
    };

    const stopSpin = () => {
      // Stop spinning the disc
      const spin = document.querySelector('.spin');
      spin.addEventListener("animationiteration", () => {
        if (!playing) {
          spin.style.animation = 'none';
          spinner.classList.remove('spin');
          spin.style.animation = '';
        }
      }, {
        once: true
      });
    };

    const handleProgress = () => {
      // Update the progress bar.
      const percent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.flexBasis = `${percent}%`;

      // Skip to next track if at the end of the song.
      if (percent === 100) {
        trackSwitch = true;
        handleForwardButton();
      }
    };

    const handleBackButton = () => {
      if (audio.currentTime <= 3) {
        const currentTrackId = parseInt(audioSource.dataset.trackid);
        const previousTrackId = currentTrackId === 1 ? '10' : (currentTrackId - 1).toString();
        const previousTrack = tracks.find(o => o.id === previousTrackId);
        changeTrack(previousTrack);
      } else {
        audio.currentTime = 0;
      }
    };

    const handleForwardButton = () => {
      const currentTrackId = parseInt(audioSource.dataset.trackid);
      const nextTrackId = currentTrackId === 10 ? '1' : (currentTrackId + 1).toString();
      const nextTrack = tracks.find(o => o.id === nextTrackId);
      changeTrack(nextTrack);
    };

    const changeTrack = (track) => {
      if (playing) trackSwitch = true;
      audioSource.setAttribute('src', track.src);
      audioSource.dataset.trackid = track.id;
      songTitle.innerHTML = track.title;
      songArtist.innerHTML = track.artist;
      spinnerDisc.style.backgroundImage = `url(${track.cover})`;
      audio.load();
      if (playing) {
        audio.addEventListener('canplay', () => {
          audio.play();
        }, {
          once: true
        });
        audio.addEventListener('play', () => {
          trackSwitch = false;
        }, {
          once: true
        });
      }
    };

    function scrub(e) {
      const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
      audio.currentTime = scrubTime;
    }

    audio.addEventListener('play', startSpin);
    audio.addEventListener('play', toggleSongPanel);
    audio.addEventListener('pause', stopSpin)
    audio.addEventListener('pause', toggleSongPanel);
    audio.addEventListener('timeupdate', handleProgress);

    backButton.addEventListener('click', handleBackButton);
    playButton.addEventListener('click', togglePlay);
    forwardButton.addEventListener('click', handleForwardButton);

    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);

    // let body = document.querySelector('body');



  },
  methods: {
    toggle_player: function () {
      let img = document.querySelector('.player_content');
      let player_audio = document.querySelector('.player');

      player_audio.style.display='flex';
  img.style.display='none'
},

displayOff: function () {
  let img = document.querySelector('.player_content');
  let player_audio = document.querySelector('.player');

  player_audio.style.display='none'
  img.style.display='initial'
}
  }
}
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.7.0/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Roboto");
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  outline: none;
}

body {
  font-size: 62.5%;
  background-color: #FCF1F5;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

.player {
  display: none;
  /*display: flex;*/
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.player-controls {
  background-color: #fff;
  border-radius: 15px;
  width: 425px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  box-shadow: 0px 33px 90px 11px rgba(147, 84, 103, 0.6);
}

* {
  box-sizing: border-box;
}

.song-panel {
  background-color: #FCF8FA;
  border-radius: 15px 15px 0 0;
  display: flex;
  height: 75px;
  justify-content: flex-end;
  padding: 0 12px 12px 12px;
  transform: translate3d(0, 100%, 0);
  transition: all 1s ease;
  width: 395px;
  z-index: 0;
  box-shadow: 0px 33px 90px 11px rgba(147, 84, 103, 0.6);
}
.song-panel .song-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 230px;
}
.song-panel .song-info .song-info__title {
  color: #444b59;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 5px;
}
.song-panel .song-info .song-info__artist {
  color: #a5a7af;
  font-size: 0.7rem;
  margin-bottom: 10px;
}
.song-panel .song-info .progress {
  background: #fff;
  border-radius: 3px;
  cursor: ew-resize;
  display: flex;
  flex: 10;
  flex-basis: 100%;
  max-height: 5px;
  position: relative;
  transition: height 0.3s;
  width: 100%;
}
.song-panel .song-info .progress .progress__filled {
  background: #fc8da8;
  flex: 0;
  flex-basis: 0%;
  width: 50%;
}
.song-panel.playing {
  transform: translate3d(0, 0, 0);
  transition: all 1s ease;
}

button {
  height: 80px;
  width: 80px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #DFDBE0;
  margin: 0 5px;
  border-radius: 15px;
  position: relative;
}

button:hover, button.playing {
  background-color: #E0DEE1;
  color: #fff;
}

button.play span.pause {
  background-color: white;
  position: absolute;
  top: 23px;
  height: 34px;
  width: 10px;
  display: block;
  border-radius: 3px;
  opacity: 0;
  transition: all 0.5s ease;
}

button.play span.pause.left {
  left: 0;
}

button.play.playing span.pause.left {
  left: 25px;
  opacity: 1;
  transition: left 0.5s ease, opacity 0.8s ease;
}

button.play span.pause.right {
  right: 0;
}

button.play.playing span.pause.right {
  right: 25px;
  opacity: 1;
  transition: right 0.5s ease, opacity 0.8s ease;
}

button.play i {
  opacity: 1;
  transition: opacity 0.5s ease;
}

button.play.playing i {
  opacity: 0;
  transition: all 0.5s ease;
}

.player-controls {
  position: relative;
}
.player-controls .spinner {
  height: 130px;
  width: 130px;
  position: absolute;
  top: -40px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.player-controls .spinner.spin {
  animation: spin 5s linear infinite;
}
.player-controls .spinner .spinner__disc {
  height: 110px;
  width: 110px;
  border-radius: 50%;
  transition: all 1s ease;
  background-image: url('../../assets/img/logo.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.player-controls .spinner .spinner__disc.scale {
  transform: scale(1.17);
  transition: all 1s ease;
}
.player-controls .spinner .spinner__disc.scale .center__disc {
  color: #e4d6e9;
  transition: all 1s ease;
}
.player-controls .spinner .spinner__disc .center__disc {
  background-color: white;
  height: 25px;
  width: 25px;
  border-radius: 50%;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.header{
  background-image: url('../../assets/img/Bg.png');
  width: 100%;
  height: 100vh;
  background-color: #0A141C;
}

.header .podcast_player{
  position: fixed;
  bottom: 0;
  right: 0;
}

.header .logo{
  top: 3%;
  margin-left: 3%;
}

.header .head {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 16%;
  margin-left: 20%;
}
.header .date{
  font-family: Kanit;
  font-style: normal;
  font-weight: bold;
  font-size: 3vh;
  line-height: 23px;
  color: #F00015;
}

.header .hypePower {
  color: #ffffff;
  font-family: Kanit;
  font-style: normal;
  font-weight: bold;
  font-size: 4vh;
  line-height: 25px;
}

.header .hypebeast{
  font-size: 16vw;
  font-family: Kanit;
  font-style: normal;
  font-weight: bold;

  text-transform: uppercase;
  -webkit-text-stroke-color: #E0E4E9;
  -webkit-text-fill-color: #0000;
  -webkit-text-stroke-width: 1px;
}

.header .btn {
  width: 25%;
  height: 100px;
  clip-path: polygon(9% 0, 100% 0%, 100% 99%, 0% 100%);
  border: #F00015;
  background-color: #F00015;

  color: #ffffff;
  font-family: Kanit;
  text-align: center;
  font-weight: bold;
  line-height: 21px;
  font-size: 20px;
}
</style>