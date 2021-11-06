const body = document.querySelector('body');
const displayer = document.querySelector('.displayer')
let cur = 0
let first_num=0
let second_num=0;
let operator;
function display_num(num){  
    cur = cur*10+parseFloat(num)
    displayer.textContent = cur
}

function calculate(){
    let result = operate(first_num,second_num,operator);
    first_num = result;
    second_num = 0;
    displayer.textContent = result
}



let num_btns = document.querySelectorAll('.num-btn')
console.log(num_btns.length)

for(let i=0;i<num_btns.length;i++){
    num_btns[i].addEventListener('click',()=>{
        display_num(num_btns[i].textContent)
        console.log(num_btns[i].textContent)
        
    })
}

let op_btns = document.querySelectorAll('.op-btn');
for(let i=0;i<op_btns.length;i++){
    op_btns[i].addEventListener('click',()=>{
        first_num = parseFloat(first_num)+parseFloat(second_num);
        second_num = 0;
        cur = second_num
        displayer.textContent = first_num
        operator = op[i].textContent

    })
}

document.getElementById('equals').addEventListener('click',()=>{
    calculate()
});

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