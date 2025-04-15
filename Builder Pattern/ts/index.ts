// step 1

class Car {
  private make: string;
  private model: string;
  private year: number;
  private color: string;

  constructor(make: string, model: string, year: number, color: string) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  // Add any additional methods or functionality here
}

// setp 2

class CarBuilder {
  private make: string;
  private model: string;
  private year: number;
  private color: string;

  setMake(make: string) {
    this.make = make;
    return this;
  }

  setModel(model: string) {
    this.model = model;
    return this;
  }

  setYear(year: number) {
    this.year = year;
    return this;
  }

  setColor(color: string) {
    this.color = color;
    return this;
  }

  build() {
    return new Car(this.make, this.model, this.year, this.color);
  }
}

// step 3

const carBuilder = new CarBuilder();

const car = carBuilder
  .setMake("Toyota")
  .setModel("Camry")
  .setYear(2022)
  .setColor("Blue")
  .build();

console.log(car); // Output: Car { make: 'Toyota', model: 'Camry', year: 2022, color: 'Blue' }