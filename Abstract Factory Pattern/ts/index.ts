// Step 1

// Base Car interface
interface Car {
  drive(): void;
}

// Specific interfaces for concrete behaviors
interface ElectricCar extends Car {
  charge(): void;
}

interface GasolineCar extends Car {
  refuel(): void;
}

// Concrete implementations
class ConcreteElectricCar implements ElectricCar {
  drive() {
    console.log("Driving the car");
  }

  charge() {
    console.log("Charging the electric car");
  }
}

class ConcreteGasolineCar implements GasolineCar {
  drive() {
    console.log("Driving the car");
  }

  refuel() {
    console.log("Refueling the gasoline car");
  }
}

// Step 2

// CarFactory interface
interface CarFactory {
  createElectricCar(): ElectricCar;
  createGasolineCar(): GasolineCar;
}

// Step 3

// Concrete Factory for creating Tesla ElectricCars
class TeslaCarFactory implements CarFactory {
  createElectricCar(): ElectricCar {
    return new ConcreteElectricCar();
  }

  // Demo: also return a gasoline car instance (family example)
  createGasolineCar(): GasolineCar {
    return new ConcreteGasolineCar();
  }
}

// Concrete Factory for creating Toyota cars
class ToyotaCarFactory implements CarFactory {
  createElectricCar(): ElectricCar {
    return new ConcreteElectricCar();
  }

  createGasolineCar(): GasolineCar {
    return new ConcreteGasolineCar();
  }
}

// Step 4

// Type guards to allow calling concrete methods
function isElectricCar(car: Car): car is ElectricCar {
  return (car as ElectricCar).charge !== undefined;
}

function isGasolineCar(car: Car): car is GasolineCar {
  return (car as GasolineCar).refuel !== undefined;
}

function clientCode(factory: CarFactory) {
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
