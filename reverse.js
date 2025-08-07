const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversed = [];
/****************method 1 */
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   reversed.unshift(numbers[i]);
// }

/****************method 2 */

// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversed.push(numbers[i]);
// }

/****************method 3************** */

// for (const num of numbers) {
//   reversed.unshift(num);
// }

/****************method 4************** */
console.log(numbers);
numbers.reverse();
console.log(reversed);
