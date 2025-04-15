// Abstraction
abstract class Shape {
    protected color: Color;
  
    constructor(color: Color) {
      this.color = color;
    }
  
    abstract draw(): void;
  }
  
  // Implementation interface
  interface Color {
    getColor(): string;
  }
  
  // Concrete Implementations
  class RedColor implements Color {
    getColor() {
      return 'Red';
    }
  }
  
  class BlueColor implements Color {
    getColor() {
      return 'Blue';
    }
  }
  
  // Connecting Abstraction with Implementation using Bridge
  class RedShape extends Shape {
    constructor(color: Color) {
      super(color);
    }
  
    draw() {
      console.log(`${this.color.getColor()} ${this.constructor.name}`);
    }
  }
  
  class BlueShape extends Shape {
    constructor(color: Color) {
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
  