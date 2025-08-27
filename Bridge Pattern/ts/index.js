// Abstraction
class Shape {
    constructor(color) {
        this.color = color;
    }
}
// Concrete Implementations
class RedColor {
    getColor() {
        return 'Red';
    }
}
class BlueColor {
    getColor() {
        return 'Blue';
    }
}
// Connecting Abstraction with Implementation using Bridge
class RedShape extends Shape {
    constructor(color) {
        super(color);
    }
    draw() {
        console.log(`${this.color.getColor()} ${this.constructor.name}`);
    }
}
class BlueShape extends Shape {
    constructor(color) {
        super(color);
    }
    draw() {
        console.log(`${this.color.getColor()} ${this.constructor.name}`);
    }
}
// Example Usage
const redColor = new RedColor();
const blueColor = new BlueColor();
const redCircle = new RedShape(redColor);
const blueCircle = new BlueShape(blueColor);
redCircle.draw(); // Output: Red RedShape
blueCircle.draw(); // Output: Blue BlueShape
