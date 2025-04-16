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
interface Command {
  execute(): void;
}

// Concrete Command
class TurnOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  private command: Command;

  setCommand(command: Command) {
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
