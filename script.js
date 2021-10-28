const body = document.querySelector('body');
const displayer = document.querySelector('.displayer')
let first_num;
let second_num;
let operator;
function display_num(num){  
    displayer.textContent = displayer.textContent+`${num}`
}

function calculate(){
    second_num = displayer.textContent;
    second_num = parseFloat(second_num);
    let result = operate(first_num,second_num,operator);
    operator = undefined
    displayer.textContent=''
    first_num = result;
    display_num(result);
}



let num_btns = document.querySelectorAll('.num-btn')
console.log(num_btns.length)

for(let i=0;i<num_btns.length;i++){
    num_btns[i].addEventListener('click',()=>{
        display_num(num_btns[i].innerHTML)
        console.log(num_btns[i].innerHTML)
        
    })
}

let op_btns = document.querySelectorAll('.op-btn');
for(let i=0;i<op_btns.length;i++){
    op_btns[i].addEventListener('click',()=>{
        first_num = displayer.textContent;
        console.log(first_num)
        operator = op_btns[i].textContent;
        console.log(operator)
        displayer.textContent=""
    })
}

document.getElementById('equals').addEventListener('click',()=>{
    calculate()
});

function get_first(){
    first_num = parseInt(displayer.textContent)
}

const add = (num1,num2) =>{
    return parseInt(num1)+parseInt(num2)
}
const subtract = (num1,num2) =>{
    return num1-num2
}
const multiply = (num1,num2) =>{
    return num1*num2
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