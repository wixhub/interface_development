// scaling content to window width


function setCurrentBoxWidth () {
    //let curWinWidth = window.innerWidth;
    let curWinWidth = window.visualViewport.width.toFixed();
    let curJumbotronWidth = 630;
    let curBoxWidth = 510;
    if (curWinWidth < 479) {
        curBoxWidth = curWinWidth - 50;
        curJumbotronWidth = curBoxWidth + 25;alert(curWinWidth);
    }
    document.getElementsByClassName("jumbotron")[0].style.width = curJumbotronWidth + "px";
    //document.getElementsByClassName("canvas")[0].style.width = curBoxWidth;
    document.getElementsByClassName("box_front")[0].style.width = curBoxWidth + "px";
}

setCurrentBoxWidth ();

/* timer bis 50s */

let seconds = 0;
let el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds = (seconds < 50)? seconds + 1: 0;
    el.innerText = seconds;
}

let cancel = setInterval(incrementSeconds, 1000);

//***********
