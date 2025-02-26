const n1_source = document.getElementById("n1");
const op_source = document.getElementById("op");
const n2_source = document.getElementById("n2");

function sum(n1,n2){
    console.log(n1+n2);
}

function difference(n1,n2){
    console.log(n1-n2);
}

function multiply(n1,n2){
    console.log(n1*n2);
}

function divide(n1,n2){
    console.log(n1/n2);
}

function modulo(n1,n2){
    console.log(n1%n2);
}

function calculate(){
    var n1 = parseInt(n1_source.value);
    var n2 = parseInt(n2_source.value);
    var op = op_source.value;

    switch (op){
        case '+':
            sum(n1,n2);
            break;    
        case '-':
            difference(n1,n2);
            break;
        case '*':
            multiply(n1,n2);
            break;
        case '/':
            divide(n1,n2);
            break;
        case '%':
            modulo(n1,n2);
            break;
        default:
            console.log("Error: Invalid Operand");
            break;
    }
}

function swapVariables(){
    let x = 5;
    let y = 10;

    console.log(`Initially: x = ${x} and y = ${y}`);
    
    x = x+y;
    y = x-y;
    x = x-y;

    console.log(`After swapping: x = ${x} and y = ${y}`);
}
