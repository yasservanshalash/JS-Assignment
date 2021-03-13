// 1. Add function code goes here
exports.add = function add(num1,num2) {
  return num1+num2;
};

// 2. Multiply function code goes here
exports.multiply = function multiply(num1,num2) {
  return num1 * num2;
};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(num) {
  if (num % 2 == 0)
    return "even";
  else
    return "odd";
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = function arrayGenerator() {
  var i;
  var arr = [];
  for (i = 1; i < 101; i++) {
  arr.push(i);
  }
  return arr;
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
  let y = 2;
  console.log(y); // undefined
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue(array) {
  return Math.min.apply( Math, array );
};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = function doubleArray(array) {
  arr = array;
  for(i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 2
  }
  return arr;
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = function findStudentName(students) {
  const array = students;
  for (i = 0; i < students.length; i++){
    console.log(array[i]["name"]);
  }
};

// 9. Transform all of the above into arrow functions below here


// 1

let add = (num1,num2) => {
  return num1+num2;
};

//2

let multiply = (num1,num2) => {
  return num1 * num2;
};

//3

let oddOrEven = (num) => {
  if (num % 2 == 0)
    return "even";
  else
    return "odd";
};

//4

let arrayGenerator = ()  =>{
  var i;
  var arr = [];
  for (i = 1; i < 101; i++) {
  arr.push(i);
  }
  return arr;
};

//5

let hoisting = () => {
  let y = 2;
  console.log(y); // undefined
};

//6

let minValue = (array) => {
  return Math.min.apply( Math, array );
};

//7

let findStudentName = (students) => {
  const array = students;
  for (i = 0; i < students.length; i++){
    console.log(array[i]["name"]);
  }
};

//8
let doubleArray = (array) => {
  arr = array;
  for(i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 2
  }
  return arr;
};
