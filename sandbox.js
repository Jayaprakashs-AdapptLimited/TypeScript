/////////// EXPLICIT TYPES
var character;
var age;
var isBoolean;
// not assignable to type string
// character = 14;
character = 'steve';
console.log(character, 'character');
isBoolean = false;
console.log(isBoolean, 'bool');
/////// Arrays
var arrays = [];
// arrays = [45,77];
arrays = ['tim', 'michael'];
console.log(arrays);
var mixed = [];
mixed.push('arr');
mixed.push(8);
// cannot add bool value
// mixed.push(true);
console.log(mixed);
/// OBJECTS
var userName;
userName = { name: 'bhuvi', wickets: 22 };
// array is a type of object
// userName = ['dff'];
