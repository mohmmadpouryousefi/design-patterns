// Step 1
// Concrete implementations
class ConcreteElectricCar {
    drive() {
        console.log('Driving the car');
    }
    charge() {
        console.log('Charging the electric car');
    }
}
class ConcreteGasolineCar {
    drive() {
        console.log('Driving the car');
    }
    refuel() {
        console.log('Refueling the gasoline car');
    }
}
// Step 3
// Concrete Factory for creating Tesla ElectricCars
class TeslaCarFactory {
    createElectricCar() {
        return new ConcreteElectricCar();
    }
    // Demo: also return a gasoline car instance (family example)
    createGasolineCar() {
        return new ConcreteGasolineCar();
    }
}
// Concrete Factory for creating Toyota cars
class ToyotaCarFactory {
    createElectricCar() {
        return new ConcreteElectricCar();
    }
    createGasolineCar() {
        return new ConcreteGasolineCar();
    }
}
// Step 4
// Type guards to allow calling concrete methods
function isElectricCar(car) {
    return car.charge !== undefined;
}
function isGasolineCar(car) {
    return car.refuel !== undefined;
}
function clientCode(factory) {
    const electricCar = factory.createElectricCar();
    const gasolineCar = factory.createGasolineCar();
    electricCar.drive();
    electricCar.charge();
    gasolineCar.drive();
    gasolineCar.refuel();
}
// Client code using TeslaCarFactory
const teslaFactory = new TeslaCarFactory();
clientCode(teslaFactory);
// Client code using ToyotaCarFactory
const toyotaFactory = new ToyotaCarFactory();
clientCode(toyotaFactory);
