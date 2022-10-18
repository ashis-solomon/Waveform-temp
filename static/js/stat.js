var IMG = document.getElementById('trkIMG');

IMG.querySelector("img").src = localStorage.getItem('IMGurl');
IMG.querySelector("img").alt = localStorage.getItem('trackDisplayName');

IMG.querySelector("img").width = 256;
IMG.querySelector("img").height = 256;

console.log(IMG)