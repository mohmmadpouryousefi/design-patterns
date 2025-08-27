// step 1
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
// setp 2
class CarBuilder {
    setMake(make) {
        this.make = make;
        return this;
    }
    setModel(model) {
        this.model = model;
        return this;
    }
    setYear(year) {
        this.year = year;
        return this;
    }
    setColor(color) {
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
