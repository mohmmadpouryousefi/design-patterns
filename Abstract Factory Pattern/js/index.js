// Step 1

// Car interface
class Car {
    drive() {
        console.log('Driving the car');
    }
}

// ElectricCar class implementing the Car interface
class ElectricCar extends Car {
    charge() {
        console.log('Charging the electric car');
    }
}

// GasolineCar class implementing the Car interface
class GasolineCar extends Car {
    refuel() {
        console.log('Refueling the gasoline car');
    }
}

// Step 2

// CarFactory interface
class CarFactory {
    createElectricCar() {
        throw new Error('createElectricCar() method must be implemented');
    }

    createGasolineCar() {
        throw new Error('createGasolineCar() method must be implemented');
    }
}

// Step 3

// Concrete Factory for creating Tesla ElectricCars
class TeslaCarFactory extends CarFactory {
    createElectricCar() {
        return new ElectricCar();
    }
}

// Concrete Factory for creating Toyota GasolineCars
class ToyotaCarFactory extends CarFactory {
    createGasolineCar() {
        return new GasolineCar();
    }
}


// Step 4

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

// Output:
// Driving the car
// Charging the electric car
// Driving the car
// Refueling the gasoline car

// Client code using ToyotaCarFactory
const toyotaFactory = new ToyotaCarFactory();
clientCode(toyotaFactory);

  // Output:
  // Driving the car
  // Charging the electric car
  // Driving the car
  // Refueling the gasoline car