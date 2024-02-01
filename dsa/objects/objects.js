// Creating an object
let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// Accessing object properties
console.log('Name:', person.name);
console.log('Age:', person['age']);

// Modifying object properties
person.age = 31;
person['city'] = 'San Francisco';
console.log('Updated object:', person);

// Adding new properties to the object
person.job = 'Software Developer';
person['salary'] = 80000;
console.log('After adding properties:', person);

// Deleting a property from the object
delete person.city;
console.log('After deleting a property:', person);

// Checking if a property exists in the object
console.log('Does "job" property exist?', 'job' in person);

// Getting object keys and values
let keys = Object.keys(person);
let values = Object.values(person);
console.log('Object keys:', keys);
console.log('Object values:', values);

// Iterating over object properties
console.log('Iterating over the object:');
for (let key in person) {
    console.log(key + ':', person[key]);
}