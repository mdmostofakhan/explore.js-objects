// console.log(this)

const kodomAli = {
    name: 'mostofa khan',
    money: 6000,
    study: 'Math',
    subject: ['calcujus', 'bangla', 'english'],
    exam: function (){
        console.log(this)
        return this.name + 'is paticipating in an exam ';
    },
    examArrow: () =>{
        console.log(this);
    },
    examNested: () =>{
        const arrow = () =>{
            console.log(this)
        }
        arrow();
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
kodomAli.exam();

const badamAli = {
    name: 'kacha badam Ali',
    money: 8000,
 }
 badamAli.exam = kodomAli.exam;
 badamAli.exam();

 function clickHunder(){
    console.log('inside the hander', this);
 }

 document.getElementById('btn-click').addEventListener('click',function(){
    console.log(this);
 })