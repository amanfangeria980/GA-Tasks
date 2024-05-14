let todos = ["Eat", "Code", "Sleep"];

const addItem = (item) => {
    todos.push(item);
};

const removeItem = (index) => {
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    } else {
        console.log("Wrong index");
    }
};

const updateItem = (index, newItem) => {
    if (index >= 0 && index < todos.length) {
        todos[index] = newItem;
    } else {
        console.log("Wrong index");
    }
};

const displayTodos = () => {
    todos.forEach((item, ind) => {
        console.log(`${ind + 1}. ${item}`);
    });
};

// Demo
addItem("Dance");
removeItem(0);
updateItem(0, "Walk");
displayTodos();
