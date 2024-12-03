const pluse = document.getElementById('pluse')
let number = document.getElementById('number')
const minus = document.getElementById('minus')

let count = 0;

function counter() {
    number.textContent = count;
}

function increment() {
    count++;
    counter();
}
 

function decrement() {
    if(count > 0){
        count--;
    }
    counter();
}

pluse.addEventListener('click', increment);
minus.addEventListener('click', decrement);