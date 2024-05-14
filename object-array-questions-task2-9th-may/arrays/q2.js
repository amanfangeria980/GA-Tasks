// Creating a products arrays containing objects
let products = [
    { name: "Laptop", price: 100000, category: "Work" },
    { name: "Mouse", price: 250, category: "Work" },
    { name: "T-shirt", price: 2500, category: "Birthday" },
    { name: "Shoes", price: 8000, category: "Birthday" }
];

// Returing product names array using map
const getProductNames = () => {
    return products.map(product => product.name);
};
// Returning products within a range
const getProductsInRange = (mini, maxi) => {
    return products.filter(product => product.price >= mini && product.price <= maxi);
};

const productNames = getProductNames();
const filteredProducts = getProductsInRange(250, 10000)
console.log("Product Names:", productNames);
console.log("Products in Price Range:", filteredProducts);
