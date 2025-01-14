
// Smart Way


// Detects Button Press so play sound when button is pressed
var drumNumbers = document.querySelectorAll(".drum").length;
for (let index = 0; index < drumNumbers; index++) {

    //Used Anonymous Function
    document.querySelectorAll(".drum")[index].addEventListener('click', function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimations(buttonInnerHTML);

    });
}


function makeSound(key) {
    switch (key) {
        case 'w':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var kickb = new Audio('./sounds/kick-bass.mp3');
            kickb.play();
            break;
        case 's':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(key);
            break;
    }
}


// Detects which key was pressed and then play the sound 
document.addEventListener("keydown", function (event) {
    // alert("Key was pressed!");
    makeSound(event.key);
    buttonAnimations(event.key);
})



function buttonAnimations(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");

    }, 100);
}

//Higer Order Functions are the types of the functions that can take other functions as inputs

/* Tedious Way
document.querySelectorAll("button")[0].addEventListener('click', handleClick);
document.querySelectorAll("button")[1].addEventListener('click', handleClick);
document.querySelectorAll("button")[2].addEventListener('click', handleClick);
document.querySelectorAll("button")[3].addEventListener('click', handleClick);
document.querySelectorAll("button")[4].addEventListener('click', handleClick);
document.querySelectorAll("button")[5].addEventListener('click', handleClick);
document.querySelectorAll("button")[6].addEventListener('click', handleClick);




document.querySelectorAll("button")[6].addEventListener('click', handleClick()); () with handleClick wil immediatley call the function as soon as the website is loaded



*/

//function for what to-do when click happens "Named Function"
// function handleClick() {
//     alert("Button got clicked");
// }