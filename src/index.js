import "./styles.css";

let h1 = document.querySelector("h1");
let color = ["#FC3E60", "#52FAB4", "#4BD4FA", "#729CFC"];

const superEventHandle = {
  textEnter: function () {
    h1.innerText = "The mouse is here";
    h1.style.color = color[0];
  },
  textLeave: function () {
    h1.innerText = "The mouse is gone";
    h1.style.color = color[1];
  },
  winResize: function () {
    h1.innerText = "You just resized!";
    h1.style.color = color[2];
  },
  winCon: function () {
    h1.innerText = "That was a right click!";
    h1.style.color = color[3];
  }
};

h1.addEventListener("mouseenter", superEventHandle.textEnter);
h1.addEventListener("mouseleave", superEventHandle.textLeave);
window.addEventListener("resize", superEventHandle.winResize);
window.addEventListener("contextmenu", superEventHandle.winCon);
