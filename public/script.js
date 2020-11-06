function play() {
    new Audio("./media/button.wav").play();
}

const hex = () => {

    var characters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function setRandomColor() {
    play();
    $('#hex').text(hex);
    var hexcode = $('#hex').text();
    $('#rancolor').css("background-color", hexcode);
    console.log(hexcode);
};

// match complimentary colors, hex code rearrangement