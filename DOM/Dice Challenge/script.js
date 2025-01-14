
// var randInt= Math.random() // generates random between 0 and 0.999999
// var randInt= Math.random() * 6 //generates random between 0 and 5
var randInt1 = Math.floor(Math.random() * 6) + 1 //generates random between 1 and 6
var randInt2 = Math.floor(Math.random() * 6) + 1 //generates random between 1 and 6


var randImage1 = "./images/dice" + randInt1 + ".png";
var randImage2 = "./images/dice" + randInt2 + ".png";


var img1 = document.querySelector('.image1').setAttribute("src", randImage1);
var img2 = document.querySelector('.image2').setAttribute("src", randImage2);

if (randInt1 > randInt2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (randInt2 > randInt1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
}
else {

    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}