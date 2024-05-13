let data = {
    title: ["Fairytale"],
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
})
