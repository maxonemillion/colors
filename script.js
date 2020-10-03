function play() {
    new Audio("media/button.wav").play();
}

function getRandomColor() {

    var characters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColorGreen() {
    play();
    $('#rancolor').css("background-color", "green");
    $('*').css("font-size", "27px");
}

function setColorPurple() {
    play();
    $('#rancolor').css("background-color", "purple");
    $('*').css("font-size", "28px");
}

function setColorOrange() {
    play();
    $('#rancolor').css("background-color", "orange");
    $('*').css("font-size", "29px");
}

function setRandomColor() {
    play();
    $('#rancolor').css("background-color", getRandomColor());
    $('*').css("font-size", "30px");
}

function setColorRed() {
    play();
    $('#rancolor').css("background-color", "red");
    $('*').css("font-size", "29px");
}
function setColorYellow() {
    play();
    $('#rancolor').css("background-color", "yellow");
    $('*').css("font-size", "28px");
}

function setColorBlue() {
    play();
    $('#rancolor').css("background-color", "blue");
    $('*').css("font-size", "27px");
}
