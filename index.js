
// 1.Task: Array Filtering and Mapping 

const people = [
    { name: "Abdur Rahman", age: 30, gender: "male" },
    { name: "Abdur Rahim", age: 26, gender: "male" },
    { name: "Bakkar", age: 22, gender: "male" },
    { name: "Arefa", age: 45, gender: "female" },
    { name: "Ayesha", age: 16, gender: "female" },
];

const result = people
    .filter(person => person.gender !== "female")
    .map(person => person.name);

// console.log(result);


// 2.Task: Object Manipulation

const books = [
    { title: "Sifur's passport grammer", author: "Saifur Rahman", year: 2010 },
    { title: "Coaching charai spoken english", author: "Saifur Rahman", year: 2015 },
];

const bookTitle = books.map(book => book.title);



// 3.Task: Function Composition

function square(num) {
   return num * num
}

function double(num) {
   return num * 2
}

function addFive(num) {
  return  num + 5
}

function composedFunction(num) {
   return addFive(double(square(num)))
}


console.log(composedFunction(5));


// 4.Task: Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2010 },
  { make: "Tesla", model: "Model 3", year: 2020 },
];

cars.sort((a, b) => a.year - b.year);


// 5.Task: Find and Modify

const persons = [
  { name: "Ab Rahman", age: 30 },
  { name: "Ab Rahim", age: 27 },
];

function updateAge(array, name, newAge) {
  const person = array.find(p => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return array;
}

console.log(updateAge(persons, "Rahim", 28));







