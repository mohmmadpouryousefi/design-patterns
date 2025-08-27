// Concrete Component
class BasicCoffee {
    cost() {
        return 5;
    }
}
// Decorator
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
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
const basicCoffee = new BasicCoffee();
console.log(`Basic Coffee Cost: $${basicCoffee.cost()}`);
const coffeeWithMilk = new MilkDecorator(basicCoffee);
console.log(`Coffee with Milk Cost: $${coffeeWithMilk.cost()}`);
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(`Coffee with Milk and Sugar Cost: $${coffeeWithMilkAndSugar.cost()}`);
