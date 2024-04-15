let age: any;

age = true;
console.log(age);

age = {name: 'karan'};
console.log(age);


let details: {name: any, age: any};
details = {name: 'hardik', age: 30};

// don't use any 
details = {name: 30, age: 'hardik'};
console.log(details);

