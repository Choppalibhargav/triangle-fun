const sides = document.querySelectorAll('.angle-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const output = document.querySelector('#output');

function calculateSumOfSquare (a,b){
    const sumOfSquares = a*a+b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares=calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
    output.innerText="The length of Hypotenuse is:"+lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);