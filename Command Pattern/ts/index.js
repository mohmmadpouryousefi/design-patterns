// Receiver
class Light {
    turnOn() {
        console.log("Light is on.");
    }
    turnOff() {
        console.log("Light is off.");
    }
}
// Concrete Command
class TurnOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}
class TurnOffCommand {
    constructor(light) {
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
