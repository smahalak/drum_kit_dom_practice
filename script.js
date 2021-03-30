let numOfDrumBtns = document.querySelectorAll('.drum').length;


for (let i = 0; i < numOfDrumBtns; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);

}



function handleClick() {

    // console.log(this);
    // this.style.color = 'white';

    // console.log(this.innerHTML);
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
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


        default:
    }



}


