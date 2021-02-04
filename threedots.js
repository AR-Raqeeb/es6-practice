const ages = [11, 14, 16, 18, 19];
const ages2 = [13, 16, 18];
const ages3 = [23, 26, 28, 22, 29];

const allAges = ages.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]; // spread operator to concatenate multiple arrays
//console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650 , 250, 450, 800, 900];
const maximum = Math.max(...takaPoisha);
console.log(maximum);