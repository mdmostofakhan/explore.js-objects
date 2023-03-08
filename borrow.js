const kodomAli = {
    name: 'mostofa khan',
    money: 6000,
    study: 'Math',
    subject: ['calcujus', 'bangla', 'english'],
    exam: function (){
        return this.name + 'is paticipating in an exam ';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = kodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000,
 }
const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);

const badamMoney = kodomAli.treatDey.call(badamAli, 400, 50);
console.log(badamMoney);

const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 200]);
console.log(badamMoney2);

const badamTreat = kodomAli.treatDey.bind(badamAli);
const remaning = badamTreat(1000, 100)
console.log(remaning);