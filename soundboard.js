const sounds_file = ['TF2 Nope', 'Alarm', 'Discord', 'Ringtone'];

sounds_file.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSound();
        document.getElementById(sound).play();
    });
    btn.addEventListener('mouseenter', () => {
        stopSound();
        document.getElementById(sound).play();
    });
    btn.addEventListener('mouseleave', () => {
        stopSound();
    });
    document.getElementById('buttons').appendChild(btn);
});

function stopSound() {
    sounds_file.forEach(sound => {
       const song = document.getElementById(sound);
       song.pause();
       song.currentTime = 0;
    });
}