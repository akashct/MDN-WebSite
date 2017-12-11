var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*document.querySelector("html").onclick = function() {
    alert("Ouch! Stop poking me!");
}*/

var myImage = document.querySelector("img");
var heading3 = document.querySelector("h3");

myImage.onclick = function() {
    var mysrc = myImage.getAttribute("src");
    if(mysrc === "images/firefox-icon.png") {
        myImage.setAttribute("src","images/firefox2.png");
        heading3.textContent = "Wohhhh, you have clicked it. Now click again !!!!";
    } else {
        myImage.setAttribute("src","images/firefox-icon.png");
        heading3.textContent = "Don't click on the picture :p";
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
