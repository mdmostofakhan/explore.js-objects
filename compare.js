// const first = {a: 2};
// const second = {a: 2};
// const thrid = second;
// if(thrid === second){
//     console.log('they are some')
// }
// else{
//     console.log('different');
// }

// do not ues this menthod to compare object or array
const first = {a: 2 , b:3, c:5, e: 1};
const second = {a: 2, c:5, b:3};
const firstString = JSON.stringify(first)
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('some')
// }
// else{
//     console.log('different');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeus = Object.keys(second)
    if(firstKeys.length === secondKeus.length){
        for(const key of firstKeys){
            if(first[key] === second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const ispaer = compareObject(first, second)
console.log(ispaer);