for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        drum(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    drum(event.key);
    buttonAnimation(event.key);
})

function drum(key) {
    switch (key) {
        case "h":
            var pad1 = new Audio("sounds/pad1.mp3");
            pad1.play();
            break;
    
        case "f":
            var pad2 = new Audio("sounds/pad2.mp3");
            pad2.play();
            break;

        case "l":
            var pad3 = new Audio("sounds/pad3.mp3");
            pad3.play();
            break;

        case "s":
            var pad4 = new Audio("sounds/pad4.mp3");
            pad4.play();
            break;

        case "r":
            var pad5 = new Audio("sounds/pad5.mp3");
            pad5.play();
            break;

        case "b":
            var pad6 = new Audio("sounds/pad6.mp3");
            pad6.play();
            break;

        case "c":
            var pad7 = new Audio("sounds/pad7.mp3");
            pad7.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  