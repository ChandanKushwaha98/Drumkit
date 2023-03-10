
let noOfDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}


function handleClick() {

    // console.log(this.innerHTML)
    let keyPressed = this.innerHTML.toLowerCase()
    makeSound(keyPressed)
    buttonAnimation(keyPressed)
    // switch (this.innerHTML) {
    //     case "w":
    //         var tom1 = new Audio('./sounds/tom-1.mp3');
    //         tom1.play();
    //         break;
    //     case "a":
    //         var tom2 = new Audio('./sounds/tom-2.mp3');
    //         tom2.play();
    //         break;
    //     case "s":
    //         var tom3 = new Audio('./sounds/tom-3.mp3');
    //         tom3.play();
    //         break;
    //     case "d":
    //         var tom4 = new Audio('./sounds/tom-4.mp3');
    //         tom4.play();
    //         break;
    //     case "j":
    //         var snare = new Audio('./sounds/snare.mp3');
    //         snare.play();
    //         break;
    //     case "k":
    //         var crash = new Audio('./sounds/crash.mp3');
    //         crash.play();
    //         break;
    //     case "l":
    //         var kick = new Audio('./sounds/kick-bass.mp3');
    //         kick.play();
    //         break;
    //     default: console.log(this.innerHTML)
    // }

}

function makeSound(c) {
    switch (c) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(this.innerHTML)
    }
}

document.addEventListener("keydown", function (event) {
    // console.log(event.key)
    let keyPressed = event.key.toLowerCase()
    makeSound(keyPressed)
    buttonAnimation(keyPressed)
})
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
}