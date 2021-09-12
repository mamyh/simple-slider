const imageElement = document.querySelector('.img');

let slider = [1, 2, 3, 4];
let i = 0;
function changeState(forward = true) {
    if (forward) {
        i++;
    } else {
        i--;
    }
    if (i >= slider.length) {
        i = 0;
    }
    if (i < 0) {
        i = slider.length - 1;
    }
    imageElement.setAttribute("src", `images/${slider[i]}.jpg`);
}

function forward() {
    changeState();
}
function backward() {
    changeState(false)
}
setInterval(changeState, 3000);