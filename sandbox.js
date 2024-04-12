////////// ARRAYS
var names = ['kapil', 'dev', 'sunil'];
// cannot assign type number to a type string 
// names.push(6);
// Cannot assign string to a number params
var mixed = ['hardik', 27, 'virat', 18];
mixed.push('rohit');
mixed[1] = 'SuryaKumar';
console.log(mixed, 'mixed');
///////////// OBJECTS
var obj = {
    name: 'Shahid',
    age: 33,
    profession: 'actor',
};
obj.age = 35;
// cannot assign type number to type string
// obj.profession = 44;
//cannot add new property
// obj.skill = 'dancing';
// it have same properties then only 
obj = { name: 'Kapoor', age: 40, profession: 'doctor' };
console.log(obj);
