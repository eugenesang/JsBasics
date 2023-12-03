// This is an inline comment

/*
this is a multi line comment
*/

// Hello world

console.log("Hello world"); // Browser, node, deno, bun ....

alert('Hello world'); // Browser



// variable declaration

var numberVariable = 10;
let stringVariable = "My String";
const pi = 3.142;

// Conditionals

// if statement 

const age = 10;

if(age > 10){
    console.log('child');
}

// if else 

if (age < 10){
    console.log('child')
}else{
    console.log('big child')
}

// nested if

if(age < 10){
    console.log('Child')
}else if (age < 18){
    console.log('big child')
}else if(age < 21){
    console.log('young adult')
}else{
    console.log('mature adult')
}


// Switch

const menuOption = 1;

switch (menuOption) {
    case 1:
        alert('Home')
        break;
    case 2:
        alert('About')
        break;
    case 3:
        alert('Settings')

    default:
        alert('Wrong navigation')
        break;
}

// Loops

// For loop

for(let i=0; i<10; i++){
    console.log('You are in round: '+i)
}

// For of

for(let num of [3, 6, 8, 10]){
    console.log('We have number: '+ num + ' in our list')
}

// while loop

var whileVal = 10;

while (whileVal > 0){
    console.log(whileVal--)
}

// do while loop

do{
    console.log(whileVal);
}while(whileVal > 0)


