const moonLink = document.getElementById('moonLink');

const music = new Audio('songs/Apocalypse - Cigarettes After Sex.mp3');

let isPlaying = false;

moonLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isPlaying) {
        music.play();
        isPlaying = true;
    } else {
        music.pause();
        // music.currentTime = 0;
        isPlaying = false;
    }
});


