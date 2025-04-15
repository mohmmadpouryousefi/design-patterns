// Abstraction
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    draw() {
      console.log(`${this.color} ${this.constructor.name}`);
    }
  }
  
  // Implementations
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
    constructor() {
      super('Red');
    }
  }
  
  class BlueShape extends Shape {
    constructor() {
      super('Blue');
    }
  }
  
  // Example Usage
  const redCircle = new RedShape();
  const blueCircle = new BlueShape();
  
  redCircle.draw(); // Output: Red RedShape
  blueCircle.draw(); // Output: Blue BlueShape
  