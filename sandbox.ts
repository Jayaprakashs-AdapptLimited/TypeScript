/////////// EXPLICIT TYPES

let character: string;
let age: number;
let isBoolean: boolean;

// not assignable to type string
// character = 14;
character = 'steve';
console.log(character, 'character');
isBoolean = false;

console.log(isBoolean, 'bool');

/////// Arrays

let arrays: string[] = [];

// arrays = [45,77];
arrays = ['tim', 'michael'];
console.log(arrays);


let mixed: (string | number)[] = [];
mixed.push('arr');
mixed.push(8);
// cannot add bool value
// mixed.push(true);

console.log(mixed);

/// OBJECTS

let userName: object;

userName = {name: 'bhuvi', wickets: 22};
// array is a type of object
// userName = ['dff'];

