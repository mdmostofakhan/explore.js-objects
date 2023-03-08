const numbers = [12, 43, 54, 64, 34, ];
// for (const number of numbers){
//     console.log(number);
// }


const bottle = {color: 'yellow', price: 56, isCleaned: true, capacity: 1}
// frist options to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
/* 3 ways to read object properties
   bottle.
   bottle['color]
   bottle[key]
*/
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
// for(const key in bottle){
//     const value = bottle[key];
//     console.log(key, value);
// }

  

for(const key in bottle){
    const value = bottle[key]
    console.log(key, value);
}