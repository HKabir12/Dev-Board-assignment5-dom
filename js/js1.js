
document.getElementById("nav-count").addEventListener("click",function(event){
event.preventDefault(); 
const navValue=getInnerTextValueByID("nav-count");
const taskNumber=getInnerTextValueByID("task-count");



})

const colors = [
    "#f0f0f0", 
    "#ffcc00", 
    "#00ffcc", 
    "#ff66b2", 
    "#66ccff", 
    "#ff3333", 
    "#66ff66", 
    "#9966ff", 
    "#ff9966", 
    "#3399ff", 
  ]; 
let currentIndex = 0;

document.getElementById("theme-toggle").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];

    document.body.style.backgroundColor = newColor;
    localStorage.setItem("bgColor", newColor);
});

