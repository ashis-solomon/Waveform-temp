var IMG = document.getElementById('trkIMG');

IMG.querySelector("img").src = localStorage.getItem('IMGurl');
IMG.querySelector("img").alt = localStorage.getItem('trackDisplayName');

IMG.querySelector("img").width = 256;
IMG.querySelector("img").height = 256;

console.log(IMG)


const fac = new FastAverageColor();
var container = document.getElementById('image-container');
// container.querySelector("img").src = 'https://i.scdn.co/image/ab67616d0000b27304bfd5a5fd5aa6ca648f66aa';
let color;
fac.getColorAsync(localStorage.getItem('IMGurl'))
        .then(color => {
            container.style.backgroundColor = color.rgba;
            container.style.color = color.isDark ? '#fff' : '#000';
            localStorage.setItem('IMGcolor',color['rgba'])
            console.log('Average color', color);
        })
        .catch(e => {
            console.log(e);
        });

console.log(localStorage.getItem('IMGcolor'));



var TRK = document.getElementById('trk');
TRK.innerHTML = `${localStorage.getItem('trackDisplayName')}`

// console.log(localStorage.getItem('trackDisplayName').split('-'))
console.log(TRK)

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function convertMsToMinutesSeconds(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);
  
    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${padTo2Digits(seconds)}`;
  }
  

var D1 = document.getElementById('D1');
var D2 = document.getElementById('D2');
var D3 = document.getElementById('D3');
var D4 = document.getElementById('D4');
var D5 = document.getElementById('D5');

// D1.innerHTML = `Duration : ${localStorage.getItem('duration')/60000} min ${localStorage.getItem('duration')%60000} sec`
D1.innerHTML = `Duration : ${convertMsToMinutesSeconds(localStorage.getItem('duration'))}`
D2.innerHTML = `Tempo : ${localStorage.getItem('tempo')}`
D3.innerHTML = `Explicit : ${localStorage.getItem('trackExplicit')}`
D4.innerHTML = `Loudness : ${localStorage.getItem('loudness')}`
D5.innerHTML = `Key : ${localStorage.getItem('key')}`




