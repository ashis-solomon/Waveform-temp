var el1 = [];
var el2 = [];
for(let i=1; i<8; i++){
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