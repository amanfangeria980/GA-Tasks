// Creating a grades array
const grades = [81, 50, 71, 22, 84];

// Function which returns grades in sorted order
const sortGrades = grades => {
    // here learnt that slice creates shallow copy of the original array
    return grades.slice().sort((a, b) => a - b);
};

// Function to calculate average grade
const calculateAvg = grades => {
    const total = grades.reduce((val, curr) => val + curr, 0);
    return total / grades.length;
};

// Display sorted grades and average grade
const sortedGrades = sortGrades(grades);
const averageGrade = calculateAvg(grades);

console.log("Sorted Grades:", sortedGrades);
console.log("Average Grade:", averageGrade);
