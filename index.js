var numberOfDrums = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var type = this.innerHTML;
        playSoundBasedOn(type);
        buttonAnimation(type);
    });
}

document.addEventListener("keydown", function (event) {
    var keyType = event.key;
    playSoundBasedOn(keyType);
    buttonAnimation(keyType);

});


function playSoundBasedOn(type) {
    switch (type) {
        case 'w':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
    
}

function buttonAnimation(key){
    var activeBtn = document.querySelector("."+key); 
    activeBtn.classList.add("pressed"); 
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}