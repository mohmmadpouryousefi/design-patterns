// Step 1

// Car interface
interface Car {
    drive(): void;
}

// ElectricCar class implementing the Car interface
class ElectricCar implements Car {
    drive() {
        console.log('Driving the car');
    }

    charge() {
        console.log('Charging the electric car');
    }
}

// GasolineCar class implementing the Car interface
class GasolineCar implements Car {
    drive() {
        console.log('Driving the car');
    }

    refuel() {
        console.log('Refueling the gasoline car');
    }
}

// Step 2

// CarFactory interface
interface CarFactory {
    createElectricCar(): Car;
    createGasolineCar(): Car;
}

// Step 3

// Concrete Factory for creating Tesla ElectricCars
class TeslaCarFactory implements CarFactory {
    createElectricCar() {
        return new ElectricCar();
    }

    createGasolineCar() {
        throw new Error('TeslaCarFactory cannot create gasoline cars');
    }
}

// Concrete Factory for creating Toyota GasolineCars
class ToyotaCarFactory implements CarFactory {
    createElectricCar() {
        throw new Error('ToyotaCarFactory cannot create electric cars');
    }

    createGasolineCar() {
        return new GasolineCar();
    }
}

// Step 4

function clientCode(factory: CarFactory) {
    const electricCar = factory.createElectricCar();
    const gasolineCar = factory.createGasolineCar();

    electricCar.drive();
    if ('charge' in electricCar) {
        electricCar.charge();
    }

    gasolineCar.drive();
    if ('refuel' in gasolineCar) {
        gasolineCar.refuel();
    }
}

// Client code using TeslaCarFactory
const teslaFactory = new TeslaCarFactory();
clientCode(teslaFactory);

// Output:
// Driving the car
// Charging the electric car
// Driving the car
// Error: TeslaCarFactory cannot create gasoline cars

// Client code using ToyotaCarFactory
const toyotaFactory = new ToyotaCarFactory();
clientCode(toyotaFactory);

// Output:
// Driving the car
// Error: ToyotaCarFactory cannot create electric cars
// Driving the car
// Refueling the gasoline car
