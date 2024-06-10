function getValues() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    return { num1, num2 };
}


function add(){
    let { num1, num2 } = getValues();
    let sum = num1+num2;
    document.getElementById("sum-el").textContent = sum;

}
function subtract(){
    let { num1, num2 } = getValues();
    let difference = num1-num2;
    document.getElementById("sum-el").textContent = difference;

}
function divide(){
    let { num1, num2 } = getValues();
    let divide_q = num1/num2;
    document.getElementById("sum-el").textContent = divide_q ;

}
function multiply(){
    let { num1, num2 } = getValues();
    let multiply_q = num1*num2;
    document.getElementById("sum-el").textContent = multiply_q ;

}