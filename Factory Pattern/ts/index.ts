//step 1

interface Product {
  name: string;
  getPrice(): number;
  getDescription(): string;
}

//step 2
class ConcreteProductA implements Product {
  name = "Product A";

  getPrice(): number {
    return 100;
  }

  getDescription(): string {
    return "This is Product A.";
  }
}

class ConcreteProductB implements Product {
  name = "Product B";

  getPrice(): number {
    return 150;
  }

  getDescription(): string {
    return "This is Product B.";
  }
}

//step 3
class ProductFactory {
  createProduct(productType: "A" | "B"): Product {
    if (productType === "A") {
      return new ConcreteProductA();
    } else if (productType === "B") {
      return new ConcreteProductB();
    } else {
      throw new Error("Invalid product type.");
    }
  }
}

//step 4

// Create a factory instance
const factory = new ProductFactory();

// Create Product A
const productA: Product = factory.createProduct('A');
console.log(productA.getDescription()); // Output: "This is Product A."
console.log(productA.getPrice()); // Output: 100

// Create Product B
const productB: Product = factory.createProduct('B');
console.log(productB.getDescription()); // Output: "This is Product B."
console.log(productB.getPrice()); // Output: 150