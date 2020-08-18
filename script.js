

var john = {
    name:'John',
    mass:92,
    height:1.92,
    caclBMI:function(){
        this.BMI = this.mass/(this.height*this.height);
    }
}
var mark = {
    name:'Mark',
    mass:78,
    height:1.68,
    caclBMI:function(){
        this.BMI = this.mass/(this.height*this.height);
    }
}
john.caclBMI();
mark.caclBMI();
console.log(john,mark);