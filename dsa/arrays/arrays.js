// Creating an array
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Accessing elements
console.log('First fruit:', fruits[0]);
console.log('Second fruit:', fruits[1]);

// Modifying elements
fruits[1] = 'pear';
console.log('Updated array:', fruits);

// Adding elements to the end
fruits.push('watermelon');
console.log('After pushing:', fruits);

// Removing elements from the end
let removedFruit = fruits.pop();
console.log('Removed fruit:', removedFruit);
console.log('After popping:', fruits);

// Adding elements to the beginning
fruits.unshift('kiwi');
console.log('After unshifting:', fruits);

// Removing elements from the beginning
let shiftedFruit = fruits.shift();
console.log('Shifted fruit:', shiftedFruit);
console.log('After shifting:', fruits);

// Finding index of an element
let indexOfOrange = fruits.indexOf('orange');
console.log('Index of orange:', indexOfOrange);

// Slicing an array
let slicedArray = fruits.slice(1, 3);
console.log('Sliced array:', slicedArray);

// Spreading an array
let copiedArray = [...fruits];
console.log('Copied array:', copiedArray);

// Iterating over an array
console.log('Iterating over the array:');
fruits.forEach((fruit, index) => {
    console.log(index + 1, fruit);
});