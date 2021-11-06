const body = document.querySelector('body');
const displayer = document.querySelector('.displayer')
let cur = 0
let first_num=0
let second_num=0;
let operator;



function get_first(){
    first_num = parseInt(displayer.textContent)
}

const add = (num1,num2) =>{
    return parseFloat(num1)+parseFloat(num2)
}
const subtract = (num1,num2) =>{
    return parseFloat(num1)-num2
}
const multiply = (num1,num2) =>{
    return parseFloat(num1)*parseFloat(num2)
}
const divide= (num1,num2) =>{
    return parseFloat(num1)/parseFloat(num2)
}


function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return add(num1,num2)
        case '-':
            return subtract(num1,num2)
        case 'X':
            return multiply(num1,num2)
            
        case '/':
            return divide(num1,num2)
        default:
            return;
    }
}