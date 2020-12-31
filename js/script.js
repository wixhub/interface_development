// scaling content to window width

screen.onorientationchange = function(e) {
    let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

    if (orientation === "landscape-primary") {
        //alert("That looks good.");
    } else if (orientation === "landscape-secondary") {
        //alert("Mmmh... the screen is upside down!");
    } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        //alert("Mmmh... you should rotate your device to landscape");
    } else if (orientation === undefined) {
        //alert("The orientation API isn't supported in this browser :(");
    }
    setCurrentBoxWidth ();
}

VisualViewport.onresize = function(e) {
    setCurrentBoxWidth ();
}

function setCurrentBoxWidth () {
    //let curWinWidth = window.innerWidth;
    let curWinWidth = window.visualViewport.width.toFixed();
    let curJumbotronWidth = 630;
    let curBoxWidth = 510;

    //let curWinHeight = window.visualViewport.height.toFixed();
    let curBoxHeight = 400;

    if (curWinWidth < 479) {
        curBoxWidth = curWinWidth - 50;
        curJumbotronWidth = curBoxWidth + 25;
    }
    // if (curWinHeight < 400) {
    //     curBoxHeight = curWinHeight - 50;
    // }
    document.getElementsByClassName("jumbotron")[0].style.width = curJumbotronWidth + "px";
    //document.getElementsByClassName("canvas")[0].style.width = curBoxWidth;
    document.getElementsByClassName("box_front")[0].style.width = curBoxWidth + "px";
    document.getElementsByClassName("box_front")[0].style.height = curBoxHeight + "px";
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
