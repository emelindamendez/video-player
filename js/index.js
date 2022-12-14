"use strict";

const $video = document.querySelector('#video');
const $play  = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progressBar = document.querySelector('#progress-bar');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeupdate);

function handlePlay () { 
  $video.play();
  $play.hidden  = true;
  $pause.hidden = false;
}

function handlePause () { 
  $video.pause();
  $play.hidden  = false;
  $pause.hidden = true;
}
function handleBackward () { 
  $video.currentTime -= 10;
}
function handleForward () { 
  $video.currentTime += 10;
}

function handleLoaded() { 
  $progressBar.max = $video.duration;
}
function handleTimeupdate() {
  $progressBar.value = $video.currentTime;
}

$progressBar.addEventListener('input', handleInput);

function handleInput () { 
  $video.currentTime = $progressBar.value;
}
