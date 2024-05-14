// Created a person object
let person = {
    name: "Aman Fangeria",
    age: 20,
    email: "aman.fangeria@geekyants.com",
    address: "3rd Main, 2nd Stage, BTM Layout, Bangalore",
};

// Function to change the age
const changeAge = (newAge) => {
    person.age = newAge;
}

// Adding the hobbies property
person.hobbies = [];

// Function to add new hobby
const addHobby = (hobby) => {
    person.hobbies.push(hobby);
}

// Displaying data
const display = () => {
    return `Name: ${person.name}\nAge: ${person.age}\nEmail: ${person.email}\nAddress: ${person.address}\nHobbies: ${person.hobbies.join(', ')}`;
}

// Demo
console.log(display());
changeAge(21);
addHobby('reading');
addHobby('running');
console.log(display());
