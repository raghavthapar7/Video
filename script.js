"use strict";

// VARIABLES TO BE USED

let app = document.querySelector(".app");
let video = document.querySelector(".video-container");
let btnSwitch = document.querySelector(".switch-btn");
let switchOverlay = document.querySelector(".switch");

btnSwitch.addEventListener("click", () => {
  if (switchOverlay.classList.contains("play")) {
    switchOverlay.classList.add("pause");
    switchOverlay.classList.remove("play");
    video.pause();
  } else {
    switchOverlay.classList.add("play");
    switchOverlay.classList.remove("pause");
    video.play();
  }
});
