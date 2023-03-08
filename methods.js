const student = {
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
const output = student.exam();
// console.log(output);
const reExam = student.improveExam();
// console.log(reExam);
const remarning = student.treatDey(800, 100);
console.log(remarning);
const dolaRemaning = student.treatDey(600, 50);
console.log(dolaRemaning);

