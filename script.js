let data = {
    title: ["Fairytale",
             "Mockingbird",
              "Another Love" ],
    song: ["music/Alexander Rybak - Fairytale - LIVE _ Norway 🇳🇴 _ Grand Final _ Eurovision 2009.mp4",
           "music/Eminem - Mockingbird (Lyrics).mp3",
           "music/Tom Odell - Another Love (Lyrics).mp3"],
    poster: ["https://live.staticflickr.com/2744/4133258502_6f45f4a896_z.jpg",
            "https://i.pinimg.com/originals/6d/85/ff/6d85ff425c6552d5e05c27108ee899a5.jpg",
            "https://m.media-amazon.com/images/I/61vsWhHWc5L._AC_UF894,1000_QL80_.jpg"],

}

let song = new Audio

window.onload = function(){
       playSong()
}

currentSong = 0
function playSong(){
       song.src = data.song[currentSong]
       songTitle = document.getElementById("songTitle")
       songTitle.textContent = data.title[currentSong]

       let img  = document.getElementsByClassName("row1")[0]
       img.style.backgroundImage = "url(" + data.poster[currentSong] + ")"

       let main  = document.getElementsByClassName("main")[0]
       main.style.backgroundImage = "url(" + data.poster[currentSong] + ")"
       song.play()
}

function playOrPauseSong(){
       let play = document.getElementById("play")

       if (song.paused){
              song.play()
              play.src = "images/pause.png"
       }else{
              song.pause()
              play.src = "images/play-button-arrowhead.png"
       }
}


song.addEventListener("timeupdate", function(){
       let fill = document.getElementsByClassName("fill")[0]
       
       let position = (song.currentTime/song.duration)*99
       
       fill.style.width = position + "%"
       convertTime(song.currentTime)

       if(song.ended){
              next
       }
})

function convertTime(seconds){
       let currentTime  = document.getElementsByClassName("currentTime")[0]
       // currentTime.textContent=seconds+" /" + song.duration

       let min = Math.floor(seconds/60)

       let sec = Math.floor(seconds%60)

       min = (min<10) ? "0"+min: min
       sec = (sec<10) ? "0"+sec: sec

       let durMin = Math.floor(song.duration/60)

       let durSec = Math.floor(song.duration%60)
       durMin = (durMin<10) ? "0"+durMin: durMin
       durSec = (durSec<10) ? "0"+durSec: durSec
       currentTime.textContent=min + " : " + sec + " / " + durMin + ":" + durSec
}

function prev(){
       currentSong --
       play  = document.getElementById("play")

       if(currentSong < 0){
              currentSong = data.song.length - 1
       }

       playSong()
       play.src = "images/pause.png"
}

function next(){
       currentSong ++
       play  = document.getElementById("play")

       if(currentSong > data.song.length-1){
              currentSong = 0
       }

       playSong()
       play.src = "images/pause.png"
}

function mute(){
       let mute = document.getElementById("mute")
       if (song.muted){
              song.muted = false
              mute.src = "images/volume.png"
       }else{
              song.muted  = true
              mute.src  = "images/volume-mute.png"
       }
}
function decrease(){
       let mute = document.getElementById("mute")
       song.volume-=0.2
       if(song.volume<=0.1){
              mute.src = "images/volume-mute.png"
       }
}
function increase(){
       let mute = document.getElementById("mute")
       song.volume+=0.2
       if(song.volume>0.1){
              mute.src = "images/volume.png"
       }

}