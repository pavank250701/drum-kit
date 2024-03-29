for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        var clickedInnerHtml = this.innerHTML;
        makeSound(clickedInnerHtml)
        buttonAnimation(clickedInnerHtml)
    });

}
document.addEventListener("keypress", function (event) {

        makeSound(event.key);
        buttonAnimation(event.key)

    }
);


function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var k = new Audio('sounds/crash.mp3');
            k.play();
            break;
        case 'l':
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;


        default: console.log(clickedInnerHtml);
            break;
    }
}

function buttonAnimation(currentElement){
    var activeButton = document.querySelector('.' + currentElement);
    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
}

// this.style.color = 'white'
// var audio = new Audio('sounds/crash.mp3');
// audio.play();
