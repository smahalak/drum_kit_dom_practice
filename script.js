// detects when user clicks on a drum

let numOfDrumBtns = document.querySelectorAll('.drum').length;

//loops through class drum and adds a click eventlistener
for (let i = 0; i < numOfDrumBtns; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        console.log(this.innerHTML);
        // stores the specific key that was typed in buttonInnerHTML
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

// Detects keyboard press

// document. targets the entire page 
// passing in e allows us to tap into the event that triggered the event listener
document.addEventListener('keydown', function (e) {
    console.log(e);
    makeSound(e.key);

    buttonAnimation(e.key)
})


function makeSound(key) {

    switch (key) {
        case 'w':
            let tom1Sound = new Audio('sounds/tom-1.mp3');  // constucts an html audio element
            tom1Sound.play();
            break;

        case 'a':
            let tom2Sound = new Audio('sounds/tom-2.mp3');
            tom2Sound.play();
            break;

        case 's':
            let tom3Sound = new Audio('sounds/tom-2.mp3');
            tom3Sound.play();
            break;

        case 'd':
            let tom4Sound = new Audio('sounds/tom-4.mp3');
            tom4Sound.play();
            break;

        case 'j':
            let snareSound = new Audio('sounds/snare.mp3');
            snareSound.play();
            break;

        case 'k':
            let crashSound = new Audio('sounds/crash.mp3');
            crashSound.play();
            break;

        case 'l':
            let kickBassSound = new Audio('sounds/kick-bass.mp3');
            kickBassSound.play();
            break;


        default: console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    // need the '.' in order to select the class of the specific key
    let activeButton = document.querySelector('.' + currentKey);

    activeButton.classList.add('pressed');

    //setTimeout will take in a function to remove the pressed class and the 100 is just .1 seconds
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100)
}