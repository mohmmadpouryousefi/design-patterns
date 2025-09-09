# Adapter Pattern

## 🎯 Intent
Convert the interface of a class into another interface that clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

## 📋 Problem
Sometimes you need to use an existing class, but its interface doesn't match what you need. You can't change the existing class because it's from a third-party library, legacy code, or would break other parts of the system.

## ✅ Solution
The Adapter pattern acts as a bridge between two incompatible interfaces. It wraps the existing class and provides the interface that the client expects, translating calls between the two interfaces.

## 🏗️ Structure

```
Target (Interface)
├── Client
└── Adapter
    ├── adaptee: Adaptee
    ├── request()
    └── specificRequest()
```

## 🚀 Real-World Examples

### 1. Media Player System
- **Target**: Unified media player interface
- **Adapter**: Converts different media formats
- **Adaptee**: Legacy media players (MP3, MP4, etc.)

### 2. Payment Gateway Integration
- **Target**: Standard payment interface
- **Adapter**: Adapts different payment providers
- **Adaptee**: Stripe, PayPal, Braintree APIs

### 3. Database Adapter
- **Target**: Common database interface
- **Adapter**: Translates queries for different databases
- **Adaptee**: MySQL, PostgreSQL, MongoDB drivers

## 💡 When to Use

- ✅ When you want to use an existing class but its interface doesn't match your needs
- ✅ When you need to integrate third-party libraries with incompatible interfaces
- ✅ When you want to create reusable classes that work with unrelated classes
- ✅ When you need to support multiple interfaces without changing existing code

## ⚠️ When NOT to Use

- ❌ When you can modify the existing class
- ❌ When the interfaces are already compatible
- ❌ When performance is critical (adapters add overhead)
- ❌ When you have control over both interfaces

## 🔄 Implementation Steps

1. **Identify the Target Interface**: Define what interface the client expects
2. **Create the Adapter Class**: Implement the target interface
3. **Reference the Adaptee**: Store a reference to the incompatible class
4. **Implement Translation Logic**: Convert calls between interfaces
5. **Test the Integration**: Ensure the adapter works correctly

## 🎯 Benefits

- ✅ **Compatibility**: Makes incompatible interfaces work together
- ✅ **Reusability**: Can adapt multiple classes to the same interface
- ✅ **Flexibility**: Easy to add new adapters for different implementations
- ✅ **Non-Intrusive**: Doesn't modify existing code
- ✅ **Single Responsibility**: Each adapter handles one specific adaptation

## 📊 Comparison with Other Patterns

| Pattern | Purpose | Key Difference |
|---------|---------|----------------|
| **Adapter** | Interface compatibility | Converts between incompatible interfaces |
| **Facade** | Simplified interface | Hides complexity of subsystem |
| **Decorator** | Enhanced functionality | Adds behavior without changing interface |
| **Bridge** | Implementation separation | Separates abstraction from implementation |

## 🧪 Testing

```typescript
describe('AudioPlayer Adapter', () => {
  it('should play MP3 files using old player', () => {
    const player = new AudioPlayer();
    const consoleSpy = jest.spyOn(console, 'log');

    player.play('song.mp3');

    expect(consoleSpy).toHaveBeenCalledWith('Playing old audio file: song.mp3');
  });

  it('should play MP4 files using new player', () => {
    const player = new AudioPlayer();
    const consoleSpy = jest.spyOn(console, 'log');

    player.play('video.mp4');

    expect(consoleSpy).toHaveBeenCalledWith('Playing new audio file: video.mp4');
  });

  it('should handle unsupported formats', () => {
    const player = new AudioPlayer();
    const consoleSpy = jest.spyOn(console, 'log');

    player.play('audio.wav');

    expect(consoleSpy).toHaveBeenCalledWith('Invalid audio format.');
  });
});
```

## 🔗 Related Patterns

- **Bridge**: Similar structure but separates abstraction from implementation
- **Decorator**: Enhances objects without changing their interface
- **Facade**: Provides simplified interface to complex subsystems
- **Proxy**: Controls access to objects with same interface

## 📚 Resources

- [Adapter Pattern - Refactoring Guru](https://refactoring.guru/design-patterns/adapter)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)
- [Adapter vs Facade - Stack Overflow](https://stackoverflow.com/questions/1891032/adapter-vs-facade)