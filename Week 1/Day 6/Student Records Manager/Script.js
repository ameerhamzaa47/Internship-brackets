const createStudentManager = () => {
    let totalStudents = 0;

    return {
        addStudent: (student) => {
            totalStudents++;
            return student;
        },
        getTotalStudents: () => totalStudents,
    };
};

const studentManager = createStudentManager();
const students = [];

const addStudent = (student) => {
    students.push(studentManager.addStudent(student));
};

const calculateAverageScore = (scores) => {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return (total / scores.length).toFixed(2);
};

const findHighestLowestScores = () => {
    const allScores = students.flatMap(student => student.scores);
    return {
        highest: Math.max(...allScores),
        lowest: Math.min(...allScores),
    };
};

// const fetchStudentData = async () => {
//     const response = await fetch('students.json');
//     return await response.json();
// };

const displayStudents = () => {
    const studentListDiv = document.getElementById('student-list');
    studentListDiv.innerHTML = '';

    students.forEach(student => {
        const averageScore = calculateAverageScore(student.scores);
        studentListDiv.innerHTML += `<div class="student">Student: ${student.name}, Average Score: ${averageScore}</div>`;
    });

    updateStatistics();
};

const updateStatistics = () => {
    const { highest, lowest } = findHighestLowestScores();
    document.getElementById('highest-score').textContent = `Highest Score: ${highest}`;
    document.getElementById('lowest-score').textContent = `Lowest Score: ${lowest}`;
    document.getElementById('total-students').textContent = `Total Students: ${studentManager.getTotalStudents()}`;
};

// Simulate saving data to a JSON file
const saveToJson = async () => {
    console.log("Saving data to JSON:", JSON.stringify(students));
};

// const manageStudentRecords = async () => {
//     try {
//         const initialStudents = await fetchStudentData();
//         initialStudents.forEach(student => {
//             addStudent(student);
//         });
//         displayStudents();
//     } catch (error) {
//         console.error('Error fetching student data:', error);
//     }
// };

document.getElementById('student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('student-name').value;
    const scoresInput = document.getElementById('student-scores').value;
    const scores = scoresInput.split(',').map(score => parseFloat(score.trim())).filter(score => !isNaN(score));

    if (name && scores.length > 0) {
        const newStudent = { name, scores };
        addStudent(newStudent);
        displayStudents();


        saveToJson();

        document.getElementById('student-name').value = '';
        document.getElementById('student-scores').value = '';
    }
});


// manageStudentRecords();



/* const createStudentManager = () => {
    let totalStudents = 0;

    return {
        addStudent: (student) => {
            totalStudents++;
            return student;
        },
        getTotalStudents: () => totalStudents,
    };
};

const studentManager = createStudentManager();
const students = [];

const addStudent = (student) => {
    students.push(studentManager.addStudent(student));
};

const calculateAverageScore = (scores) => {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return (total / scores.length).toFixed(2);
};

// Find the student with the highest and lowest score
const findHighestLowestScores = () => {
    let highestScore = -Infinity;
    let lowestScore = Infinity;
    let highestScoringStudent = null;
    let lowestScoringStudent = null;

    students.forEach(student => {
        student.scores.forEach(score => {
            if (score > highestScore) {
                highestScore = score;
                highestScoringStudent = student.name; // Track the student with the highest score
            }
            if (score < lowestScore) {
                lowestScore = score;
                lowestScoringStudent = student.name; // Track the student with the lowest score
            }
        });
    });

    return {
        highest: { score: highestScore, student: highestScoringStudent },
        lowest: { score: lowestScore, student: lowestScoringStudent },
    };
};

// const fetchStudentData = async () => {
//     const response = await fetch('students.json');
//     return await response.json();
// };

const displayStudents = () => {
    const studentListDiv = document.getElementById('student-list');
    studentListDiv.innerHTML = '';

    students.forEach(student => {
        const averageScore = calculateAverageScore(student.scores);
        studentListDiv.innerHTML += `<div class="student">
            Student: ${student.name}, 
            Average Score: ${averageScore}
        </div>`;
    });

    updateStatistics();
};

const updateStatistics = () => {
    const { highest, lowest } = findHighestLowestScores();
    document.getElementById('highest-score').textContent = `Highest Score: ${highest.score} (by ${highest.student})`;
    document.getElementById('lowest-score').textContent = `Lowest Score: ${lowest.score} (by ${lowest.student})`;
    document.getElementById('total-students').textContent = `Total Students: ${studentManager.getTotalStudents()}`;
};

// Simulate saving data to a JSON file
const saveToJson = async () => {
    console.log("Saving data to JSON:", JSON.stringify(students));
};

// const manageStudentRecords = async () => {
//     try {
//         const initialStudents = await fetchStudentData();
//         initialStudents.forEach(student => {
//             addStudent(student);
//         });
//         displayStudents();
//     } catch (error) {
//         console.error('Error fetching student data:', error);
//     }
// };

document.getElementById('student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('student-name').value;
    const scoresInput = document.getElementById('student-scores').value;
    const scores = scoresInput.split(',').map(score => parseFloat(score.trim())).filter(score => !isNaN(score));

    if (name && scores.length > 0) {
        const newStudent = { name, scores };
        addStudent(newStudent);
        displayStudents();

        saveToJson();

        document.getElementById('student-name').value = '';
        document.getElementById('student-scores').value = '';
    }
});*/