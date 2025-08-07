let price = 25;
let comp_price = price;
comp_price = 15;

// console.log(price);
// console.log(comp_price);

const products = [25, 25, 25, 25];
const comp_products = products;

comp_products[0] = 15;
products[1] = 55;

// console.log(products);
// console.log(comp_products);

const numbers = [1, 2, 3, 4, 5];

/*one mathod*/
// const new_numbers = Array.from(numbers);

/*two mathod*/
// const new_numbers = [].concat(numbers);

/*three mathod*/
const new_numbers = [...numbers];

new_numbers.push(8);
console.log(numbers);
console.log(new_numbers);

// shallo copy
// deep copy
