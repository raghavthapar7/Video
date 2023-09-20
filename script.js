"use strict";

// VARIABLES TO BE USED

let app = document.querySelector(".app");
let video = document.querySelector(".video-container");
let btnSwitch = document.querySelector(".switch-btn");
let switchOverlay = document.querySelector(".switch");
let preloader = document.querySelector(".preloader");

// The play pause functionality
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

// Adding the preloader
/* 
    For this we will use the load event - which fires when everything 
    related to the HTML file i.e. stylesheets, resources etc. are 
    loaded.

    Unlike the DOMContentLoaded event which fires, when the HTML 
    structure is loaded. It does not wait for the other stuff to get 
    loaded
*/

window.addEventListener("load", function () {
  preloader.classList.add("preloader-hidden");
});
