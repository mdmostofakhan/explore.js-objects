const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'andey',
    job: 'khali kha',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
}

// 2. object constructor
const person = new Object();
// console.log(person);

// 3. object create method
// const item = Object.create(null);
const item = Object.create(student);
// console.log(item.job);

// 4. class
class Person{
    name = 'kulna';
    address = 'sondor ghat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1);


const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const getGirlFriend= (name = "chokina")=> "name";
 console.log(getGirlFriend()); 
