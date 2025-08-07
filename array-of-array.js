const numbers = [1, 2, 3, 4, 5];
const tournamentRan = [[], [], [], [], []];
const examMarks = [
  [37, 56, 80, 63, 13],
  [47, 67, 89, 2, 39],
  [45, 53, 48, 84, 12],
  [24, 20, 44, 27, 50],
  [15, 73, 1, 34, 55],
];

// console.log(numbers[0]);

// console.log(examMarks[0]);

const first_class_first = examMarks[0];
// console.log(first_class_first[0]);

// console.log(examMarks[0][0]);

examMarks[0][0] = 38;
examMarks[1].pop();
examMarks[1].push(40);
// console.log(examMarks);

for (const marks of examMarks) {
  console.log(marks);
}
