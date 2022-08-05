const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const color = ["#2EE6D6", "#36D96F", "#C3E62E"];

h1.style.color = "white";
// body.style.backgroundColor = "#2EE6D6";

window.addEventListener("resize", function() {
    let winWidth = window.innerWidth;
    //console.log(winWidth);
    if(winWidth <= 800){
        body.style.backgroundColor = color[0];
    } else if(winWidth > 800 && winWidth <= 1500) {
        body.style.backgroundColor = color[1];
    } else if(winWidth > 1500) {
        body.style.backgroundColor = color[2];
    }
});