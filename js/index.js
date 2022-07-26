const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const input = document.querySelectorAll(".keys");
const button = document.querySelectorAll(".button");
const menu = document.getElementById("menu");
const menuIcon = document.querySelector(".menu-icon");
const section = document.querySelector(".section");
const checkbox = document.querySelector(".checkbox");
const slider = document.querySelector(".slider");
const root = document.querySelector(":root");
var num = 0;
let buttonLength = button.length;
let keysLength = keys.length;

function buttonClick(i) {
  button[i].addEventListener("click", function () {
    if (checkbox.checked) {
      return;
    } else {
      drum(keys[i]);
      buttonAnimi(button[i]);
    }
  });
}

for (p = 0; p < buttonLength; p++) {
  buttonClick(p);
  inputChange(p);
  input[p].value = keys[p];
}

function drum(key) {
  switch (key) {
    case keys[0]:
      var pad1 = new Audio("sounds/pad" + (num + 1) + ".mp3");
      pad1.loop = true;
      pad1.play();
      break;
    case keys[1]:
      var pad2 = new Audio("sounds/pad" + (num + 2) + ".mp3");
      pad2.loop = true;
      pad2.play();
      break;
    case keys[2]:
      var pad3 = new Audio("sounds/pad" + (num + 3) + ".mp3");
      pad3.loop = true;
      pad3.play();
      break;
    case keys[3]:
      var pad4 = new Audio("sounds/pad" + (num + 4) + ".mp3");
      pad4.loop = true;
      pad4.play();
      break;
    case keys[4]:
      var pad5 = new Audio("sounds/pad" + (num + 5) + ".mp3");
      pad5.loop = true;
      pad5.play();
      break;
    case keys[5]:
      var pad6 = new Audio("sounds/pad" + (num + 6) + ".mp3");
      pad6.loop = true;
      pad6.play();
      break;
    case keys[6]:
      var pad7 = new Audio("sounds/pad" + (num + 7) + ".mp3");
      pad7.loop = true;
      pad7.play();
      break;
    case keys[7]:
      var pad8 = new Audio("sounds/pad" + (num + 8) + ".mp3");
      pad8loop = true;
      pad8.play();
      break;
    case keys[8]:
      var pad9 = new Audio("sounds/pad" + (num + 9) + ".mp3");
      pad9.loop = true;
      pad9.play();
      break;

    default:
      break;
  }
}

function inputChange(t) {
  input[t].addEventListener("change", function () {
    if (keys.includes(input[t].value)) {
      input[t].value = "";
      input[t].focus();
    } else {
      keys[t] = this.value;
      // return false;
    }
  });
}

function keypressed() {
  document.addEventListener("keypress", function (event) {
    if (checkbox.checked) {
      return;
    } else {
      for (x = 0; x < keysLength; x++) {
        if (event.key == keys[x]) {
          drum(keys[x]);
          buttonAnimi(button[x]);
        }
      }
    }
  });
}

keypressed();

window.onclick = function (event) {
  if (
    event.target.matches(".menu") ||
    event.target.matches(".section") ||
    event.target.matches(".item") ||
    event.target.matches(".item p") ||
    event.target.matches(".keys") ||
    event.target.matches(".sec-header h1")
  ) {
    return;
  } else {
    if (section.classList.contains("show")) {
      section.classList.remove("show");
    }
  }
};

function buttonAnimi(x) {
  x.classList.add("pressed");
}

function slide() {
  let slideVal = slider.value;
  switch (slideVal) {
    case "0":
      root.style.setProperty("--active", "#b2cc62");
      root.style.setProperty("--shadow-color", "#616F39");
      root.style.setProperty("--button-color", "#3E432E");
      root.style.setProperty("--container-color", "#A7D129");
      num = 0;
      break;

    case "30":
      root.style.setProperty("--active", "#5750e7");
      root.style.setProperty("--shadow-color", "#5432D3");
      root.style.setProperty("--button-color", "#241E92");
      root.style.setProperty("--container-color", "#7B6CF6");
      num = 9;
      break;

    case "60":
      root.style.setProperty("--active", "#bd62ee");
      root.style.setProperty("--shadow-color", "#892CDC");
      root.style.setProperty("--button-color", "#52057B");
      root.style.setProperty("--container-color", "#BC6FF1");
      num = 18;
      break;

    default:
      root.style.setProperty("--active", "#b2cc62");
      root.style.setProperty("--shadow-color", "#616F39");
      root.style.setProperty("--button-color", "#3E432E");
      root.style.setProperty("--container-color", "#A7D129");
      num = 0;
      break;
  }
}

slider.addEventListener("change", slide);
