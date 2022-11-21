// Variable for each page element
let bandVideo = document.getElementById("videoplayer");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let slowerButon = document.getElementById("slower");
let fasterButton = document.getElementById("faster");
let skipButton = document.getElementById("skip");
let muteButton = document.getElementById("mute");
let volumeSlider = document.getElementById("slider");
let volumeNumber = document.getElementById("volume");



// Variables for the state of the video
let videoVolume = 1;



// Run as soon as the page loads
bandVideo.autoplay = false;
bandVideo.loop = false;
bandVideo.load();
volumeNumber.textContent = videoVolume*100;



//Testing event listeners for each element
/*let allPageElements = [bandVideo, playButton, pauseButton, slowerButon, fasterButton, skipButton, muteButton, volumeSlider, volumeNumber];
for (let element of allPageElements) {
    element.addEventListener("click", function() {
        console.log("You clicked " + element.id);
    });
}*/



//Helper function for button effects

// Sets the dispayed volume number and the actual volume of the video.
function setVolumeAndLabel(valueIn) {
    volumeNumber.textContent = valueIn;
    bandVideo.volume = valueIn;
}

function setMute() {
    bandVideo.muted = true;
    muteButton.textContent = "Unmute";
    setVolumeAndLabel(0);
}

function setUnmute() {
    bandVideo.muted = false;
    muteButton.textContent = "Mute";
    setVolumeAndLabel(videoVolume);
}



// Functions for each button's effect
function playVideo() {
    console.log("playing video");
    bandVideo.play();
}

function pauseVideo() {
    console.log("pausing video");
    bandVideo.pause();
}

function slowerVideo() {
    console.log("slowing video");
    if (bandVideo.playbackRate == 2) {
        bandVideo.playbackRate = 1;
    }
    else if (bandVideo.playbackRate == 1) {
        bandVideo.playbackRate = 0.5;
    }
    else {
        alert("Video is at slowest speed!");
    }
}

function fasterVideo() {
    console.log("speeding up video");
    if (bandVideo.playbackRate == 0.5) {
        bandVideo.playbackRate = 1;
    }
    else if (bandVideo.playbackRate == 1) {
        bandVideo.playbackRate = 2;
    }
    else {
        alert("Video is at fastest speed!");
    }
}

function skipInVideo() {
    if (bandVideo.currentTime + 15 >= bandVideo.duration) {
        console.log("skipped too far, returning to start");
        bandVideo.currentTime = 0;
        bandVideo.pause();
    }
    else{
        console.log("skipping ahead video");
        bandVideo.currentTime += 15;
    }
}

function muteVideo() {
    if (bandVideo.muted){
        console.log("unmuting video");
        volumeSlider.value = videoVolume*100;
        setUnmute();
    }
    else {
        console.log("muting video");
        volumeSlider.value = 0;
        setMute();
    }
}

function adjustVolume() {
    console.log("adjusting volume");
    videoVolume = volumeSlider.value/100;
    setUnmute();
}



// Add event listeners
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
slowerButon.addEventListener("click", slowerVideo);
fasterButton.addEventListener("click", fasterVideo);
skipButton.addEventListener("click", skipInVideo);
muteButton.addEventListener("click", muteVideo);
volumeSlider.addEventListener("change", adjustVolume);