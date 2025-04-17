//step 1
function Product(name) {
    this.name = name;
}

Product.prototype.getPrice = function () {
    throw new Error('This method must be implemented in concrete products.');
};

Product.prototype.getDescription = function () {
    throw new Error('This method must be implemented in concrete products.');
};

//step 2
function ConcreteProductA() {
    Product.call(this, 'Product A');
}

ConcreteProductA.prototype = Object.create(Product.prototype);
ConcreteProductA.prototype.constructor = ConcreteProductA;

ConcreteProductA.prototype.getPrice = function () {
    return 100;
};

ConcreteProductA.prototype.getDescription = function () {
    return 'This is Product A.';
};

function ConcreteProductB() {
    Product.call(this, 'Product B');
}

ConcreteProductB.prototype = Object.create(Product.prototype);
ConcreteProductB.prototype.constructor = ConcreteProductB;

ConcreteProductB.prototype.getPrice = function () {
    return 150;
};

ConcreteProductB.prototype.getDescription = function () {
    return 'This is Product B.';
};

//step 3

function ProductFactory() {}

ProductFactory.prototype.createProduct = function (productType) {
  if (productType === 'A') {
    return new ConcreteProductA();
  } else if (productType === 'B') {
    return new ConcreteProductB();
  } else {
    throw new Error('Invalid product type.');
  }
};

//step 4
const { ProductFactory } = require('./factory');

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