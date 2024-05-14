// Creating a car object
let car = {
    make: "Lamborghini",
    model: "Aventador",
    year: 2024,
    color: "Green",
    description: function () {
        return `${this.year} ${this.make} ${this.model} ${this.color}`;
    },
    changeColor: function (newColor) {
        this.color = newColor;
    }
};


// Destucture and extraction
let { make, model } = car;
console.log(`${make} => ${model}`)


// Demo
console.log(car.description());
car.changeColor("Blue");
console.log(car.description());
