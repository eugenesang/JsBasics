// print something

function printHelloWorld(){
    console.log('Hello world')
}

// take an argument and print it

function printSomething(something){
    console.log(something);
}

// return

function addFn(a, b){
    return a + b;
}

// return a function

function nestedFn(a, b, action){ // action is a callback function
    return ()=>action(a, b); // see more about arrow functions
}

// to use the above function

const callback = nestedFn(a, b,  addFn);

const callbackResult = callback();