# Mediator Pattern

## 🎯 Intent
Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly and lets you vary their interaction independently.

## 📋 Problem
When objects communicate directly with each other, they become tightly coupled. This makes the system hard to maintain and extend. For example, in a chat application, if users communicate directly, adding new features or changing communication logic requires modifying all user objects.

## ✅ Solution
The Mediator pattern introduces a central mediator object that handles all communication between colleague objects. Colleagues no longer communicate directly but through the mediator.

## 🏗️ Structure

```
Mediator (Interface)
├── ConcreteMediator
│   ├── colleagues: Colleague[]
│   ├── addColleague()
│   └── send()
└── Colleague (Interface)
    ├── ConcreteColleague
    │   ├── mediator: Mediator
    │   ├── setMediator()
    │   ├── send()
    │   └── receive()
```

## 🚀 Real-World Examples

### 1. Chat Room System
- **Mediator**: ChatRoom
- **Colleagues**: Users
- **Communication**: Messages are sent through the chat room

### 2. Air Traffic Control
- **Mediator**: Air Traffic Control Tower
- **Colleagues**: Aircraft
- **Communication**: Landing requests, position updates

### 3. Smart Home System
- **Mediator**: Smart Home Hub
- **Colleagues**: Lights, sensors, thermostats
- **Communication**: Automation rules and device control

## 💡 When to Use

- ✅ When objects communicate in complex but well-defined ways
- ✅ When reusing objects is difficult due to tight coupling
- ✅ When behavior distributed among several classes should be customizable

## ⚠️ When NOT to Use

- ❌ When objects don't need to communicate much
- ❌ When communication is simple and direct
- ❌ When the system is already well-structured

## 🔄 Implementation Steps

1. **Create Mediator Interface**: Define communication contract
2. **Create Colleague Interface**: Define colleague responsibilities
3. **Implement Concrete Mediator**: Handle colleague interactions
4. **Implement Concrete Colleagues**: Communicate through mediator
5. **Register Colleagues**: Add colleagues to mediator

## 🎯 Benefits

- ✅ **Loose Coupling**: Objects don't need to know each other
- ✅ **Centralized Control**: Communication logic is centralized
- ✅ **Easy Maintenance**: Changes are localized
- ✅ **Reusable Components**: Colleagues work with any mediator

## 📊 Comparison with Other Patterns

| Pattern | Purpose | Key Difference |
|---------|---------|----------------|
| **Mediator** | Object communication | Centralizes complex interactions |
| **Observer** | Event notification | One-to-many broadcasting |
| **Facade** | Simplified interface | Hides subsystem complexity |
| **Command** | Request encapsulation | Decouples sender from receiver |

## 🧪 Testing

```typescript
// Test mediator functionality
describe('ChatRoom Mediator', () => {
  it('should broadcast messages to all colleagues except sender', () => {
    const chatRoom = new ChatRoom();
    const alice = new User('Alice');
    const bob = new User('Bob');

    chatRoom.addColleague(alice);
    chatRoom.addColleague(bob);

    // Spy on console.log to verify message broadcasting
    const consoleSpy = jest.spyOn(console, 'log');

    alice.sendMessage('Hello!');

    expect(consoleSpy).toHaveBeenCalledWith('[Alice]: Hello!');
    expect(consoleSpy).toHaveBeenCalledWith('Bob received: "Hello!" from Alice');
  });
});
```

## 🔗 Related Patterns

- **Observer**: Often used together for event notification
- **Command**: Can be used by mediator to encapsulate requests
- **Facade**: Similar in providing simplified interface
- **Strategy**: Mediator can use different strategies for communication

## 📚 Resources

- [Mediator Pattern - Refactoring Guru](https://refactoring.guru/design-patterns/mediator)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)
- [Mediator vs Observer - Stack Overflow](https://stackoverflow.com/questions/2745412/mediator-vs-observer-object-oriented-design-patterns)</content>
<parameter name="filePath">c:\Users\Mohamaaad\design-patterns\Mediator Pattern\README.md
