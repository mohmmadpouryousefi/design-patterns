// Subsystem 1
class Engine {
  start() {
    console.log("Engine is starting...");
  }

  stop() {
    console.log("Engine is stopping...");
  }
}

// Subsystem 2
class AirConditioner {
  turnOn() {
    console.log("Air Conditioner is turned on.");
  }

  turnOff() {
    console.log("Air Conditioner is turned off.");
  }
}

// Subsystem 3
class MusicSystem {
  playMusic() {
    console.log("Music system is playing music.");
  }

  stopMusic() {
    console.log("Music system has stopped.");
  }
}

// Facade
class CarFacade {
  constructor() {
    this.engine = new Engine();
    this.airConditioner = new AirConditioner();
    this.musicSystem = new MusicSystem();
  }

  startCar() {
    this.engine.start();
    this.airConditioner.turnOn();
    this.musicSystem.playMusic();
    console.log("Car is ready to drive.");
  }

  stopCar() {
    this.musicSystem.stopMusic();
    this.airConditioner.turnOff();
    this.engine.stop();
    console.log("Car has stopped.");
  }
}

// Example usage:

const carFacade = new CarFacade();
carFacade.startCar(); // Output: Engine is starting... Air Conditioner is turned on. Music system is playing music. Car is ready to drive.

carFacade.stopCar(); // Output: Music system has stopped. Air Conditioner is turned off. Engine is stopping... Car has stopped.
