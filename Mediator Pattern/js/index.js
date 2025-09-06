// Mediator Pattern - JavaScript Implementation
// The Mediator pattern defines an object that encapsulates how a set of objects interact.
// It promotes loose coupling by keeping objects from referring to each other explicitly.

// Mediator Interface
class Mediator {
    send(message, colleague) {
        throw new Error('send method must be implemented');
    }
}

// Concrete Mediator - Chat Room
class ChatRoom extends Mediator {
    constructor() {
        super();
        this.colleagues = [];
    }

    addColleague(colleague) {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }

    send(message, colleague) {
        console.log(`[${colleague.name}]: ${message}`);

        // Send message to all other colleagues
        this.colleagues.forEach(colleagueItem => {
            if (colleagueItem !== colleague) {
                colleagueItem.receive(message, colleague.name);
            }
        });
    }
}

// Colleague Interface
class Colleague {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        if (this.mediator) {
            this.mediator.send(message, this);
        }
    }

    receive(message, senderName) {
        console.log(`${this.name} received: "${message}" from ${senderName}`);
    }
}

// Concrete Colleagues
class User extends Colleague {
    constructor(name) {
        super(name);
    }

    sendMessage(message) {
        console.log(`${this.name} is sending: ${message}`);
        this.send(message);
    }
}

// Usage Example
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

// Another example: Air Traffic Control System
console.log('\n=== Mediator Pattern - Air Traffic Control Example ===\n');

// Mediator for air traffic control
class AirTrafficControl extends Mediator {
    constructor() {
        super();
        this.aircrafts = [];
    }

    addAircraft(aircraft) {
        this.aircrafts.push(aircraft);
        aircraft.setMediator(this);
    }

    send(message, aircraft) {
        console.log(`[ATC]: ${message} from ${aircraft.callsign}`);

        // Relay message to all other aircraft
        this.aircrafts.forEach(aircraftItem => {
            if (aircraftItem !== aircraft) {
                aircraftItem.receive(message, aircraft.callsign);
            }
        });
    }

    requestLanding(aircraft) {
        console.log(`[ATC]: ${aircraft.callsign}, cleared to land on runway 27L`);
        aircraft.receive('Cleared to land on runway 27L', 'ATC');
    }
}

// Aircraft colleague
class Aircraft extends Colleague {
    constructor(callsign) {
        super(callsign);
        this.callsign = callsign;
    }

    requestLanding() {
        console.log(`${this.callsign}: Requesting landing clearance`);
        this.send('Requesting landing clearance');
    }

    sendMessage(message) {
        this.send(message);
    }
}

// Usage
const atc = new AirTrafficControl();

const flight1 = new Aircraft('UAL123');
const flight2 = new Aircraft('DAL456');
const flight3 = new Aircraft('AAL789');

atc.addAircraft(flight1);
atc.addAircraft(flight2);
atc.addAircraft(flight3);

console.log('\nAircraft joined ATC\n');

flight1.requestLanding();
flight2.sendMessage('Traffic in sight');
flight3.sendMessage('Roger that');

atc.requestLanding(flight1);

console.log('\n=== Key Benefits ===');
console.log('1. Loose Coupling: Components don\'t need to know about each other');
console.log('2. Centralized Communication: All interactions go through the mediator');
console.log('3. Easy to Maintain: Changes to communication logic are centralized');
console.log('4. Reusable Components: Colleagues can work with different mediators');
