class Component {
  constructor(name) {
    this.name = name;
  }

  operation() {
    console.log(`${this.name} is performing an operation.`);
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter((c) => c !== component);
  }

  operation() {
    console.log(`${this.name} is performing an operation.`);
    this.children.forEach((child) => child.operation());
  }
}

// Example usage:

const leaf1 = new Component('Leaf 1');
const leaf2 = new Component('Leaf 2');
const leaf3 = new Component('Leaf 3');

const composite1 = new Composite('Composite 1');
composite1.add(leaf1);
composite1.add(leaf2);

const composite2 = new Composite('Composite 2');
composite2.add(leaf3);
composite2.add(composite1);

composite2.operation();
