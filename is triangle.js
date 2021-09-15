const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output');

function calculateSumOfAngles(angle1,angle2,angle3)
{
    const sumOfAngle = angle1+angle2+angle3;
    return sumOfAngle;
}

function isTriangle(){
    const sumOfAngle = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if (sumOfAngle === 180) {
        output.innerText="you are right the angles form right angle triangle";
    } else {
        output.innerText="sorry you are wrong!! they don't form triangle";
    }
}
isTriangleBtn.addEventListener("click",isTriangle)