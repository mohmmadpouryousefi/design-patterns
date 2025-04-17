// Component Interface
interface Coffee {
  cost(): number;
}

// Concrete Component
class BasicCoffee implements Coffee {
  cost() {
    return 5;
  }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }
}

// Example usage:
const basicCoffee: Coffee = new BasicCoffee();
console.log(`Basic Coffee Cost: $${basicCoffee.cost()}`);

const coffeeWithMilk: Coffee = new MilkDecorator(basicCoffee);
console.log(`Coffee with Milk Cost: $${coffeeWithMilk.cost()}`);

const coffeeWithMilkAndSugar: Coffee = new SugarDecorator(coffeeWithMilk);
console.log(`Coffee with Milk and Sugar Cost: $${coffeeWithMilkAndSugar.cost()}`);
