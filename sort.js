const numbers = [7, 2, 9, 4, 1, 6, 3, 8, 5];
// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ["sakib", "nokib", "akib"];
friends.sort();
// console.log(friends);

const age = [
  37, 56, 80, 63, 13, 47, 67, 89, 2, 39, 45, 53, 48, 84, 12, 24, 20, 44, 27, 50,
  15, 73, 1, 34, 55, 31, 28, 11, 6, 4, 71, 75, 76, 25, 46, 3, 35, 18, 30, 79,
  40, 10, 81, 42, 96, 16, 7, 17, 41, 88, 86, 93, 29, 21, 32, 26, 5, 38, 9, 43,
  14, 68, 66, 33, 8, 49, 22, 87, 74, 19, 60, 36, 58, 59, 64, 72, 61, 70, 100,
  65, 85, 99, 82, 97, 94, 23, 52, 92, 90, 95, 78, 83, 91, 57, 98, 77, 62, 69,
  51, 54,
];
// console.log(age);
// age.sort();
// console.log(age);

const sorted_age = age.sort(function (a, b) {
  return a - b;
});
console.log(sorted_age);
