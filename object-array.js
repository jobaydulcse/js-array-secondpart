const numbers = [1, 2, 42, 424, 2421];
const players = [{}, {}, {}];
const employees = [
  { name: "Asik", designation: "Content Writer", salary: 25000 },
  { name: "Eakin", designation: "Developer", salary: 23000 },
  { name: "Eamin", designation: "Digital Marketer", salary: 40000 },
];

employees[0].name = "Ashraf";

// console.log(employees);
// console.log(employees[1]);
// console.log(employees[1].salary);

for (const employee of employees) {
  //   console.log(employee.salary, employee.designation);
}

for (const emp of employees) {
  const person = emp;
  const personInfo = person.name + ":" + person.salary;
  console.log(personInfo);
}
