const keys = document.querySelectorAll('.key');

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //if the key down has not the right keyCode : we stop
    audio.currentTime = 0; //rewind to the start of the soundtrack to make it play everytime the key is down
    audio.play();
    
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //will skip the property if it's not the transform one
    
    this.classList.remove('playing'); //here "this" will be each element with .key because it's called in the eventListener on it
}

//we listen to the keydown event
window.addEventListener('keydown', playSound);

//we need to remove the class 'playing' on .key elements once the transition is done
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

