function playSound(e) {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
    setTimeout(function () {
        key.classList.remove('playing');
    }, 100);
};

window.addEventListener('keydown', playSound);