let h1 = document.querySelector("h1");
let color = ["#FC3E60", "#52FAB4", "#4BD4FA", "#729CFC"];

/* 
//방식 1
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
*/

//방식 2
const ENTERTEXT = "The mouse is here";
const LEAVETEXT = "The mouse is gone";
const RESIXEWIN = "You just resized!";
const CONWIN = "That was a right click!";

const superEventHandle = {
  eventFun: function (textCon, txtColor) {
    h1.innerText = textCon;
    h1.style.color = txtColor;
  }
};

h1.addEventListener("mouseenter", () => {
  superEventHandle.eventFun(ENTERTEXT, color[0]);
});
h1.addEventListener("mouseleave", () => {
  superEventHandle.eventFun(LEAVETEXT, color[1]);
});
window.addEventListener("resize", () => {
  superEventHandle.eventFun(RESIXEWIN, color[2]);
});
window.addEventListener("contextmenu", () => {
  superEventHandle.eventFun(CONWIN, color[3]);
});

