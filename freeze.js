const bottle = {color: 'yellow', price: 56, isCleaned: true, capacity: 1}
    const keys = Object.keys(bottle);
    // console.log(keys);
    const values = Object.values(bottle);
    // console.log(values);
    // const pari = Object.entries(bottle);
    // console.log(pari);

//   const twoDimension =  [[ 'color', 'yellow' ], [ 'price', 56 ], [ 'isCleaned', true ], [ 'capacity', 1 ]]

console.log(bottle);
Object.seal(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
console.log(bottle);