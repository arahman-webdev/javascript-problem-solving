


const people = [
  { name: "Abdur Rahman", age: 30, gender: "male" },
  { name: "Abdur Rahim", age: 26, gender: "male" },
  { name: "Bakkar", age: 22, gender: "male" },
  { name: "Ayesha", age: 16, gender: "female" },
];

const result = people
  .filter(person => person.gender !== "female")
  .map(person => person.name);

console.log(result);

