"use strict";
class StudentRecord {
    Students = [];
    addStudent(id, name, age, grade) {
        const student = { id, name, age, grade };
        this.Students.push(student);
        console.log(`Student ${name} is Added`);
    }
    checkStudent(id) {
        const student = this.Students.find(item => item.id == id);
        if (student) {
            console.log(`Student ${id} is Available in the list`);
        }
        else {
            console.log(`Student with ID: ${id} not found`);
        }
    }
    allStudent() {
        return this.Students;
    }
}
const StudentData = new StudentRecord;
StudentData.addStudent(142, 'Hamza', 20, 'A');
StudentData.addStudent(123, 'Ahmed', 20, 'A');
StudentData.checkStudent(123);
console.log(StudentData.allStudent());



// class Hamza{
//     name:string
//     age:number
//     private id?:number
//     constructor(name:string,age:number,id:number){
//         this.name=name
//         this.age=age
//         this.id=id
//     }
//     greet():string{
//         return `ha yr ma hi hu ${this.name}... aho ${this.age} saal umer a masla ki a tano.. id ku dasa waja chuti kr putr ${this.id}`
//     }
// }
// class ahmed extends Hamza{
//     bouns:number
//     constructor(name:string,age:number,id:number,bouns:number){
//         super(name,age,id)
//         this.bouns=bouns
//     }
//     inaam():string{
//         return `bahly tuj pr hum kosh hoya tra ${this.bouns} inam a putr... moj kr`
//     }
// }
// class radiusPurpose{
//     static PI:number=3.14 
//    static cal(radius:number):number{
//         return this.PI * radius * radius
//     }
// }
// let talha=new ahmed('Hamza',20,8,78)
// console.log(radiusPurpose.cal(2));
// console.log(talha.greet());
// console.log(talha.inaam());
