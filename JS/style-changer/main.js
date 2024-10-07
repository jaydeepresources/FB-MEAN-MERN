function makeRed() {
    document.getElementById("para").style.color = 'red'
}

function makeGreen() {
    document.getElementById("para").style.color = 'green'
}

function makeBlue() {
    document.getElementById("para").style.color = 'blue'
}

function makeBlack() {
    document.getElementById("para").style.color = 'black'
}

function alignText(alignment) {

    switch (alignment) {
        case 'left':
            document.getElementById("para").style.textAlign = "left"
            break;

        case 'center':
            document.getElementById("para").style.textAlign = "center"
            break;

        case 'right':
            document.getElementById("para").style.textAlign = "right"
            break;

        default:
            break;
    }

}

function setSize(event) {
    document.getElementById("para").style.fontSize = `${event.target.value}px`
}