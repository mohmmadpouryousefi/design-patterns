// Mediator Pattern - TypeScript Implementation
// The Mediator pattern defines an object that encapsulates how a set of objects interact.
// It promotes loose coupling by keeping objects from referring to each other explicitly.

// Mediator Interface
interface Mediator {
  send(message: string, colleague: Colleague): void;
}

// Colleague Interface
interface Colleague {
  name: string;
  setMediator(mediator: Mediator): void;
  send(message: string): void;
  receive(message: string, senderName: string): void;
}

// Concrete Mediator - Chat Room
class ChatRoom implements Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
    colleague.setMediator(this);
  }

  send(message: string, colleague: Colleague): void {
    console.log(`[${colleague.name}]: ${message}`);

    // Send message to all other colleagues
    this.colleagues.forEach(colleagueItem => {
      if (colleagueItem !== colleague) {
        colleagueItem.receive(message, colleague.name);
      }
    });
  }
}

// Concrete Colleague - User
class User implements Colleague {
  public name: string;
  private mediator: Mediator | null = null;

  constructor(name: string) {
    this.name = name;
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  send(message: string): void {
    if (this.mediator) {
      this.mediator.send(message, this);
    }
  }

  receive(message: string, senderName: string): void {
    console.log(`${this.name} received: "${message}" from ${senderName}`);
  }

  sendMessage(message: string): void {
    console.log(`${this.name} is sending: ${message}`);
    this.send(message);
  }
}

// Advanced Example: Smart Home System
interface SmartDevice {
  id: string;
  name: string;
  setMediator(mediator: SmartHomeHub): void;
  sendCommand(command: string): void;
  receiveCommand(command: string, senderId: string): void;
}

class SmartHomeHub implements Mediator {
  private devices: Map<string, SmartDevice> = new Map();
  private rules: Map<string, string[]> = new Map();

  addDevice(device: SmartDevice): void {
    this.devices.set(device.id, device);
    device.setMediator(this);
  }

  setRule(triggerDeviceId: string, actionDeviceIds: string[]): void {
    this.rules.set(triggerDeviceId, actionDeviceIds);
  }

  send(message: string, colleague: Colleague): void {
    const device = colleague as unknown as SmartDevice;

    // Check if there are rules for this device
    const actionDeviceIds = this.rules.get(device.id);
    if (actionDeviceIds) {
      actionDeviceIds.forEach(deviceId => {
        const targetDevice = this.devices.get(deviceId);
        if (targetDevice) {
          targetDevice.receiveCommand(message, device.id);
        }
      });
    }

    // Broadcast to all other devices
    this.devices.forEach((targetDevice, deviceId) => {
      if (deviceId !== device.id) {
        targetDevice.receiveCommand(message, device.id);
      }
    });
  }
}

class SmartLight implements SmartDevice {
  public id: string;
  public name: string;
  private mediator: SmartHomeHub | null = null;
  private isOn: boolean = false;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  setMediator(mediator: SmartHomeHub): void {
    this.mediator = mediator;
  }

  sendCommand(command: string): void {
    if (this.mediator) {
      this.mediator.send(command, this as any);
    }
  }

  receiveCommand(command: string, senderId: string): void {
    console.log(`${this.name} received command: "${command}" from ${senderId}`);

    if (command === 'TURN_ON') {
      this.isOn = true;
      console.log(`${this.name} is now ON`);
    } else if (command === 'TURN_OFF') {
      this.isOn = false;
      console.log(`${this.name} is now OFF`);
    }
  }

  getStatus(): boolean {
    return this.isOn;
  }
}

class MotionSensor implements SmartDevice {
  public id: string;
  public name: string;
  private mediator: SmartHomeHub | null = null;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  setMediator(mediator: SmartHomeHub): void {
    this.mediator = mediator;
  }

  sendCommand(command: string): void {
    if (this.mediator) {
      this.mediator.send(command, this as any);
    }
  }

  receiveCommand(command: string, senderId: string): void {
    console.log(`${this.name} received command: "${command}" from ${senderId}`);
  }

  detectMotion(): void {
    console.log(`${this.name} detected motion!`);
    this.sendCommand('MOTION_DETECTED');
  }
}

// Usage Examples
console.log('=== Mediator Pattern - Chat Room Example ===\n');

// Create chat room (mediator)
const chatRoom = new ChatRoom();

// Create users (colleagues)
const alice = new User('Alice');
const bob = new User('Bob');
const charlie = new User('Charlie');

// Add users to chat room
chatRoom.addColleague(alice);
chatRoom.addColleague(bob);
chatRoom.addColleague(charlie);

console.log('Users joined the chat room\n');

// Users send messages through the mediator
alice.sendMessage('Hello everyone!');
bob.sendMessage('Hi Alice!');
charlie.sendMessage('Good to see you all!');

console.log('\n=== Mediator Pattern - Smart Home Example ===\n');

// Create smart home hub (mediator)
const smartHome = new SmartHomeHub();

// Create smart devices
const livingRoomLight = new SmartLight('light1', 'Living Room Light');
const kitchenLight = new SmartLight('light2', 'Kitchen Light');
const motionSensor = new MotionSensor('sensor1', 'Front Door Sensor');

// Add devices to smart home
smartHome.addDevice(livingRoomLight);
smartHome.addDevice(kitchenLight);
smartHome.addDevice(motionSensor);

// Set automation rules: When motion is detected, turn on living room light
smartHome.setRule('sensor1', ['light1']);

console.log('Smart home devices connected\n');

// Simulate motion detection
motionSensor.detectMotion();

// Manual control
livingRoomLight.sendCommand('TURN_OFF');
kitchenLight.sendCommand('TURN_ON');

console.log('\n=== Key Benefits ===');
console.log('1. Loose Coupling: Components don\'t need to know about each other');
console.log('2. Centralized Communication: All interactions go through the mediator');
console.log('3. Easy to Maintain: Changes to communication logic are centralized');
console.log('4. Reusable Components: Colleagues can work with different mediators');
console.log('5. Automation Support: Easy to add rules and workflows');
