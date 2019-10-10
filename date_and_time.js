//partOfDay() returns string timeOfDay
var partOfDay = function() {
    var time = new Date().getHours();
    var minutes = new Date().getMinutes();
    var timeOfDay = (
        time > 5 && time < 12 ? "morning" :
        time == 12 && min == 0 ? "noon" :
        time >= 12 && time < 17 ? "afternoon" :
        time >= 17 && time < 20 ? "evening" :
        time >= 20 && time < 23 ? "night" :
        time >= 23 && minutes <= 59 ? "night" :
        time == 0 && minutes == 0 ? "midnight" :
        time >= 0 && time <= 5 ? "before dawn" :
        "check timeOfDay variable"
    );
    return timeOfDay
};


var information = function() {
    document.getElementById("weekday").innerText = moment().format('dddd');
    document.getElementById("timeOfDay").innerText = partOfDay();
    document.getElementById("hourMinuteSecond").innerText = moment().format('LT');
    document.getElementById("dateOfTheMonth").innerText = moment().format('LL');
};


window.setInterval(information, 1000);

// cancelFullScreen (and similarly webkitCancelFullScreen needs to be called on document, whereas requestFullscreen needs to be called on document.documentElement.
function toggleFullScreen() {
    var doc = document.documentElement,
        state = (document.webkitIsFullScreen || document.isFullScreen),
        requestFunc = (doc.requestFullscreen || doc.webkitRequestFullScreen),
        cancelFunc = (document.cancelFullScreen || document.webkitCancelFullScreen);

    (!state) ? requestFunc.call(doc): cancelFunc.call(document);
};


function togglePause() {
    var audio = document.querySelector('audio');
     if (audio.paused && !audio.ended) {
        audio.muted = false;
        audio.play();
     } else {
        audio.muted = true;
        audio.pause();
     }
};
