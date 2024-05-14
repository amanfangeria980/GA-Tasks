// Creating a student object
let student = {
    name: "Aman Fangeria",
    grade: 12,
    subjects: [
        { name: 'Math', score: 89 },
        { name: 'Science', score: 80 },
        { name: 'History', score: 75 }
    ]
};

// Function to add a new subject
const addSubject = (newName, newScore) => {
    student.subjects.push({ name: newName, score: newScore });
}
// Function to update score
const updateScore = (subjectName, newScore) => {
    let subject = student.subjects.find(sub => sub.name === subjectName);
    if (subject) {
        subject.score = newScore;
    } else {
        console.log('Subject is not found');
    }
}

// Function to calculate average score
const calculateAvg = () => {
    let total = student.subjects.reduce((val, curr) => val + curr.score, 0);
    return total / student.subjects.length;
}

// Demo
addSubject('English', 45);
console.log(`Average score: ${calculateAvg()}`);
