// print something

const printHelloWorld = () => {
    console.log('Hello world')
}

// take an argument and print it

const printSomething = (something) => {
    console.log(something);
}

// return

const addFn = (a, b) => {
    return a + b;
}

// return a function

const nestedFn = (a, b, action) => { // action is a callback function
    return () => action(a, b);
}

// to use the above function

const callback = nestedFn(a, b, addFn);

const callbackResult = callback();

// or

const multiply = nestedFn(a, b, (a, b) => {
    return a * b;
})


// return without using return

const divide = (numerator, denominator) => numerator / denominator; // don't include the braces