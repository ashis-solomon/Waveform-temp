const dict_key = [
    "acousticness",
    "danceability",
    "energy",
    "instrumentalness",
    "liveness",
    "speechiness",
    "valence",
    "key",
    "mode",
    "explicit",
    "duration",
    "loudness",
    "tempo"
]

const dict = {}

var el1 = [];
var el2 = [];
var text_label = [];
for(let i=1; i<8; i++){
    text_label[i] = document.getElementById(`${i}`);
    text_label[i].innerHTML = dict_key[i-1];
    text_label[i].innerHTML = text_label[i].innerHTML.charAt(0).toUpperCase() + text_label[i].innerHTML.slice(1,);
    el1[i] = document.getElementById(`textTRY${i}`);
    el2[i] = document.getElementById(`rangeTRY${i}`);
}

// console.log(el1)
// console.log(el2)

for(let i=1; i<8; i++){
    el1[i].addEventListener('input', function () {
        el2[i].value = this.value;
    });

    el2[i].addEventListener('input', function () {
        el1[i].value = this.value;
    });
}

const b1_SUBMIT = document.getElementById('b1_SUBMIT');
const b2_RESET = document.getElementById('b2_RESET');
const b3_RANDOM = document.getElementById('b3_RANDOM');

b2_RESET.addEventListener('click', function (){
    for(let i=1; i<8; i++){
        el1[i].value = 50;
        el2[i].value = 50;
    }
});

b3_RANDOM.addEventListener('click', function (){
    for(let i=1; i<8; i++){
        el1[i].value = Math.floor(Math.random() * 101);;
        el2[i].value = el1[i].value;
    }
});

b1_SUBMIT.addEventListener('click', function(){
    console.log(dict_key.length)
    for(let i=0; i<7; i++){
        dict[`${dict_key[i]}`] = el1[i+1].value;
    }

    console.log(dict);
});


