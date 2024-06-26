let data = {
       title: ["Fairytale", "Mockingbird", "Another Love"],
       song: [
           "music/Alexander Rybak - Fairytale - LIVE _ Norway 🇳🇴 _ Grand Final _ Eurovision 2009.mp4",
           "music/Eminem - Mockingbird (Lyrics).mp3",
           "music/Tom Odell - Another Love (Lyrics).mp3"
       ],
       poster: [
           "https://live.staticflickr.com/2744/4133258502_6f45f4a896_z.jpg",
           "https://i.pinimg.com/originals/6d/85/ff/6d85ff425c6552d5e05c27108ee899a5.jpg",
           "https://m.media-amazon.com/images/I/61vsWhHWc5L._AC_UF894,1000_QL80_.jpg"
       ]
   };
   
   let song = new Audio();
   let currentSong = 0;
   
   window.onload = function() {
       playSong();
   };
   
   function playSong() {
       song.src = data.song[currentSong];
       let songTitle = document.getElementById("songTitle");
       songTitle.textContent = data.title[currentSong];
   
       let img = document.getElementsByClassName("row1")[0];
       img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
   
       let main = document.getElementsByClassName("main")[0];
       main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
   
       song.play();
   
       song.addEventListener('loadedmetadata', function() {
           convertTime(song.currentTime);
       });
   }
   
   function playOrPauseSong() {
       let play = document.getElementById("play");
   
       if (song.paused) {
           song.play();
           play.src = "images/pause.png";
       } else {
           song.pause();
           play.src = "images/play-button-arrowhead.png";
       }
   }
   
   song.addEventListener("timeupdate", function() {
       let fill = document.getElementsByClassName("fill")[0];
       let position = (song.currentTime / song.duration) * 99;
       fill.style.width = position + "%";
       convertTime(song.currentTime);
   
       if (song.ended) {
           next();
       }
   });
   
   function convertTime(seconds) {
       let currentTime = document.getElementsByClassName("currentTime")[0];
   
       let min = Math.floor(seconds / 60);
       let sec = Math.floor(seconds % 60);
   
       min = (min < 10) ? "0" + min : min;
       sec = (sec < 10) ? "0" + sec : sec;
   
       let durMin = Math.floor(song.duration / 60);
       let durSec = Math.floor(song.duration % 60);
       durMin = (durMin < 10) ? "0" + durMin : durMin;
       durSec = (durSec < 10) ? "0" + durSec : durSec;
       currentTime.textContent = min + " : " + sec + " / " + durMin + " : " + durSec;
   }
   
   function prev() {
       currentSong--;
       if (currentSong < 0) {
           currentSong = data.song.length - 1;
       }
       playSong();
       document.getElementById("play").src = "images/pause.png";
   }
   
   function next() {
       currentSong++;
       if (currentSong > data.song.length - 1) {
           currentSong = 0;
       }
       playSong();
       document.getElementById("play").src = "images/pause.png";
   }
   
   function mute() {
       let mute = document.getElementById("mute");
       if (song.muted) {
           song.muted = false;
           mute.src = "images/volume.png";
       } else {
           song.muted = true;
           mute.src = "images/volume-mute.png";
       }
   }
   
   function decrease() {
       let mute = document.getElementById("mute");
       song.volume -= 0.2;
       if (song.volume <= 0.1) {
           mute.src = "images/volume-mute.png";
       }
   }
   
   function increase() {
       let mute = document.getElementById("mute");
       song.volume += 0.2;
       if (song.volume > 0.1) {
           mute.src = "images/volume.png";
       }
   }
   
   // Seek bar functionality
   document.addEventListener('DOMContentLoaded', function() {
       const seekBar = document.querySelector('.seek-bar');
       const fill = document.querySelector('.fill');
   
       function setFillWidth(event) {
           const seekBarRect = seekBar.getBoundingClientRect();
           const offsetX = event.clientX - seekBarRect.left;
           const width = Math.max(0, Math.min(seekBarRect.width, offsetX));
           fill.style.width = (width / seekBarRect.width) * 100 + '%';
           song.currentTime = (width / seekBarRect.width) * song.duration;
       }
   
       // Event listener for click on seek bar
       seekBar.addEventListener('click', setFillWidth);
   
       // Event listeners for dragging
       seekBar.addEventListener('mousedown', function() {
           document.addEventListener('mousemove', setFillWidth);
       });
   
       document.addEventListener('mouseup', function() {
           document.removeEventListener('mousemove', setFillWidth);
       });
   });

   let speed = 1.0; // Initial playback speed
   let speed_changed = 0

    function setPlaybackSpeed(newSpeed) {
        speed = newSpeed;
        song.playbackRate = speed;
    }

// Function to increase playback speed
    function speedUp() {
        if (speed < 2.0) { // Maximum speed set to 2.0
            setPlaybackSpeed(speed + 0.1);
            
        }
    }

// Function to decrease playback speed
    function speedDown() {
        if (speed > 0.6) { // Minimum speed set to 0.5
            setPlaybackSpeed(speed - 0.1);
        }
    }

   
    let btn1 = document.getElementsByClassName("btnUp")
    btn1[0].addEventListener("click",function(){
        speedUp()
    let sp = document.getElementsByClassName("speeding")
        speed_changed = speed.toFixed(1)
        sp[0].textContent = speed_changed + "x"
    })

    let btn2 = document.getElementsByClassName("btnDown")
    btn2[0].addEventListener("click",function(){
        speedDown()
    let sp = document.getElementsByClassName("speeding")
        speed_changed = speed.toFixed(1)
        sp[0].textContent = speed_changed + "x"
    })
   


   