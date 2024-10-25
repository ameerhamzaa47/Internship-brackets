enum gradeLevel{
    freshman='freshman',
    sophomore='sophomore',
    Senior='Senior',
    Junior= 'Junior'
}

class StudentManagement{
    name:string
    id:number
    grade:gradeLevel

    constructor(name:string,id:number,grade:gradeLevel){
        this.name=name
        this.id=id
        this.grade=grade
    }

    getStudentInfo(): string {
        return `Student Name: ${this.name}, ID: ${this.id}, Grade: ${gradeLevel[this.grade]}`;
    }
}

let Student=new StudentManagement('Hamza',142,gradeLevel.Junior)
console.log(Student.getStudentInfo());





