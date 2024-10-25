"use strict";
var gradeLevel;
(function (gradeLevel) {
    gradeLevel["freshman"] = "freshman";
    gradeLevel["sophomore"] = "sophomore";
    gradeLevel["Senior"] = "Senior";
    gradeLevel["Junior"] = "Junior";
})(gradeLevel || (gradeLevel = {}));
class StudentManagement {
    name;
    id;
    grade;
    constructor(name, id, grade) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
    getStudentInfo() {
        return `Student Name: ${this.name}, ID: ${this.id}, Grade: ${gradeLevel[this.grade]}`;
    }
}
let Student = new StudentManagement('Hamza', 142, gradeLevel.Junior);
console.log(Student.getStudentInfo());
