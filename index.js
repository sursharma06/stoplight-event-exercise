// (function () {
//   'use strict';
//
//   // YOUR CODE HERE
// })();

var stopButton = document.querySelector('#stopButton');
var stopLight = document.querySelector('#stopLight');
stopButton.addEventListener('click', function () {
    stopLight.classList.toggle('stop');
  });

var slowButton = document.querySelector('#slowButton');
var slowLight = document.querySelector('#slowLight');
slowButton.addEventListener('click', function () {
  slowLight.classList.toggle('slow');
});

var goButton = document.querySelector('#goButton');
var goLight = document.querySelector('#goLight');
goButton.addEventListener('click', function () {
  goLight.classList.toggle('go');
});

document.querySelector('#stopButton').addEventListener('mouseenter', function () {
  console.log('Entered ' + stopButton.innerText + ' button');
});

document.querySelector('#stopButton').addEventListener('mouseleave', function () {
  console.log('Left ' + stopButton.innerText + ' button');
});

document.querySelector('#slowButton').addEventListener('mouseenter', function () {
  console.log('Entered ' + slowButton.innerText + ' button');
});

document.querySelector('#slowButton').addEventListener('mouseleave', function () {
  console.log('Left ' + slowButton.innerText + ' button');
});

document.querySelector('#goButton').addEventListener('mouseenter', function () {
  console.log('Entered ' + goButton.innerText + ' button');
});

document.querySelector('#goButton').addEventListener('mouseleave', function () {
  console.log('Left ' + goButton.innerText + ' button');
});
