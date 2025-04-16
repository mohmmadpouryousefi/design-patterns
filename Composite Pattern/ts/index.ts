interface Component {
  operation(): void;
}

class Leaf implements Component {
  constructor(private name: string) {}

  operation() {
    console.log(`${this.name} is performing an operation.`);
  }
}

class Composite implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  add(component: Component) {
    this.children.push(component);
  }

  remove(component: Component) {
    this.children = this.children.filter((c) => c !== component);
  }

  operation() {
    console.log(`${this.name} is performing an operation.`);
    this.children.forEach((child) => child.operation());
  }
}

// Example usage:

const leaf1 = new Leaf('Leaf 1');
const leaf2 = new Leaf('Leaf 2');
const leaf3 = new Leaf('Leaf 3');

const composite1 = new Composite('Composite 1');
composite1.add(leaf1);
composite1.add(leaf2);

const composite2 = new Composite('Composite 2');
composite2.add(leaf3);
composite2.add(composite1);

composite2.operation();
