const input = document.querySelectorAll('.angle-input');
const areaBtn = document.querySelector('#area-btn');
const output = document.querySelector('#output');

function calculateSumOfArea (base,height) {
const sumOfArea = base*height;
return sumOfArea;
}

function calculateArea(){
    const sumOfArea = calculateSumOfArea(Number(input[0].value),Number(input[1].value));
    const Area=0.5*(sumOfArea);
    output.innerText="The area of Triangle is:"+Area;
}

areaBtn.addEventListener("click",calculateArea);