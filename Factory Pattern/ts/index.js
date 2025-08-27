//step 1
//step 2
class ConcreteProductA {
    constructor() {
        this.name = "Product A";
    }
    getPrice() {
        return 100;
    }
    getDescription() {
        return "This is Product A.";
    }
}
class ConcreteProductB {
    constructor() {
        this.name = "Product B";
    }
    getPrice() {
        return 150;
    }
    getDescription() {
        return "This is Product B.";
    }
}
//step 3
class ProductFactory {
    createProduct(productType) {
        if (productType === "A") {
            return new ConcreteProductA();
        }
        else if (productType === "B") {
            return new ConcreteProductB();
        }
        else {
            throw new Error("Invalid product type.");
        }
    }
}
//step 4
// Create a factory instance
const factory = new ProductFactory();
// Create Product A
const productA = factory.createProduct('A');
console.log(productA.getDescription()); // Output: "This is Product A."
console.log(productA.getPrice()); // Output: 100
// Create Product B
const productB = factory.createProduct('B');
console.log(productB.getDescription()); // Output: "This is Product B."
console.log(productB.getPrice()); // Output: 150
