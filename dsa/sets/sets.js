// Creating a set
let colorsSet = new Set(['red', 'green', 'blue']);

// Adding elements to the set
colorsSet.add('yellow');
colorsSet.add('orange');
console.log('After adding elements:', colorsSet);

// Removing an element from the set
colorsSet.delete('green');
console.log('After deleting an element:', colorsSet);

// Checking if an element exists in the set
console.log('Does "blue" exist in the set?', colorsSet.has('blue'));

// Getting the size of the set
console.log('Size of the set:', colorsSet.size);

// Clearing all elements from the set
colorsSet.clear();
console.log('After clearing the set:', colorsSet);

// Iterating over a set
let animalsSet = new Set(['lion', 'elephant', 'monkey']);

console.log('Iterating over the set:');
animalsSet.forEach(animal => {
    console.log(animal);
});

// Converting Set to Array
let animalsArray = Array.from(animalsSet);
console.log('Converted set to array:', animalsArray);