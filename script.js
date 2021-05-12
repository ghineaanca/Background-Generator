var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssInitial = document.querySelector("h5");
var defaultColor1 = "#ff0000";
var defaultColor2 = "#ffff00";
var btn = document.getElementById("button1");
window.addEventListener("load", startup);

function startup() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ defaultColor1 
	+ ", " 
	+ defaultColor2 
	+ ")";

	cssInitial.textContent = body.style.background + ";";
	color1.value = defaultColor1;
	color2.value = defaultColor2;
}	


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandom(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random()*16)];
		}
	return color;
}

function randomValue() {
	color1.value = getRandom();
	color2.value = getRandom();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomValue);
