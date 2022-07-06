// onmouseenter Event
// EXAMPLE 2 || In HTML :
function onmouseEnter() {
    document.getElementById("demo").style.color = "red";
}

function onmouseLeave() {
    document.getElementById("demo").style.color = "blue";
}


// EXAMPLE 2 || In JavaScript :
document.getElementById("demo2").onmouseenter = function() {
    onmouseEnter2();
}

function onmouseEnter2() {
    document.getElementById("demo2").style.color = "orange";
}

document.getElementById("demo2").onmouseleave = function() {
    onmouseLeave2();
}

function onmouseLeave2() {
    document.getElementById("demo2").style.color = "purple";
}


// EXAMPLE 3 || In JavaScript, using the addEventListener() method :
document.getElementById("demo3").addEventListener('mouseenter', mouseEnter);
document.getElementById("demo3").addEventListener('mouseleave', mouseLeave);

function mouseEnter() {
    document.getElementById("demo3").style.color = "coral";
}

function mouseLeave() {
    document.getElementById("demo3").style.color = "violet";
}


// CSSStyleDeclaration setProperty() Method
// EXAMPLE 1 ||
function mySetProperty() {
    var declaration = document.styleSheets[0].cssRules[0].style;
    var setprop = declaration.setProperty("background-color", "yellow");
}