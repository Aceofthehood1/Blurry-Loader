const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load=0;
let int = setInterval(blurring,30); /**The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval(). */
function blurring(){
    load++;
    if(load >99){
        clearInterval(int);
    }
    
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) { //function from stack overflow to map a range of numbers to anothe range of numbers
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
