"use strict";
const StudentList = [
    { name: 'Ahmed', grade: 8, score: 92 },
    { name: 'Hamza', grade: 7, score: 48 },
    { name: 'Tariq', grade: 6, score: 32 }
];
function passingStudent(students, caritaria) {
    return students.filter(caritaria);
}
let result = passingStudent(StudentList, (Student) => Student.score > 50);
console.log(result);
