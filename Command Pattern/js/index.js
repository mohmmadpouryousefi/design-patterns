// Receiver
class Light {
  turnOn() {
    console.log("Light is on.");
  }

  turnOff() {
    console.log("Light is off.");
  }
}

// Command Interface
class Command {
  execute() {
    throw new Error("execute method not implemented.");
  }
}

// Concrete Command
class TurnOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Example usage:
const light = new Light();

const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Output: Light is on.

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Output: Light is off.
