const body = document.querySelector('body');
const displayer = document.querySelector('.displayer')
let cur = 0
let first_num;
let second_num;
let operator;

num_btns = document.querySelectorAll('.num-btn');

Array.from(num_btns).forEach(num_btn =>{
    num_btn.addEventListener('click',()=>{
        display_num(num_btn.textContent)
    })
})

op_btns = document.querySelectorAll('.op-btn');
Array.from(op_btns).forEach(op_btn =>{
    op_btn.addEventListener('click',()=>{
        if(first_num && operator){
            let result = operate(first_num,cur,operator)
            first_num = result;
            operator = op_btn.textContent
            displayer.textContent = result;
            cur = 0;
        }else{
            operator = op_btn.textContent
            first_num = cur
            cur = 0
            displayer.textContent=''
        }
    })
})
document.querySelector('#equals').addEventListener('click',()=>{
    if(first_num && operator){
        let t = operate(first_num,cur,operator)
        displayer.textContent = t
    }
})

document.getElementById('ac').addEventListener('click',()=>{
    cur = 0;
    first_num = 0;
    displayer.textContent=''
})
function display_num(num){
    if(num>='0' && num<='9'){
        cur = cur*10+parseFloat(num)
        displayer.textContent = cur
        console.log(cur)
    }else{
        displayer.textContent += "."
        cur = parseFloat(displayer.textContent)
    }
}

function cur_num(){
    cur_num = parseInt(displayer.textContent)
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