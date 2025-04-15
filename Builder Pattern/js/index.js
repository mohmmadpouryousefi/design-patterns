// step 1

class Car {
  constructor() {
    // Set default values for the properties
    this.make = '';
    this.model = '';
    this.year = 0;
    this.color = '';
  }
}

// step 2

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  build() {
    return this.car;
  }
}

// step 3

const carBuilder = new CarBuilder();

const car = carBuilder
  .setMake('Toyota')
  .setModel('Camry')
  .setYear(2022)
  .setColor('Blue')
  .build();

console.log(car); // Output: Car { make: 'Toyota', model: 'Camry', year: 2022, color: 'Blue' }
