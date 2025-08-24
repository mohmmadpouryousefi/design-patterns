# 🎯 Design Patterns in JavaScript and TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Patterns](https://img.shields.io/badge/Patterns-11%20Implemented-green.svg)](#implemented-patterns)

> A comprehensive collection of **Gang of Four (GoF) Design Patterns** implemented in modern JavaScript (ES6+) and TypeScript with practical examples, detailed explanations, and best practices.

## 📖 About

Design patterns are proven solutions to recurring problems in software design and development. They represent best practices used by experienced developers and provide a standard terminology for software architecture. This repository serves as a learning resource and reference guide for implementing these patterns in JavaScript and TypeScript.

## 🏗️ Pattern Categories

### 🔨 Creational Patterns
*Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.*

- **[Abstract Factory Pattern](./Abstract%20Factory%20Pattern/)** - Creates families of related objects
- **[Builder Pattern](./Builder%20Pattern/)** - Constructs complex objects step by step
- **[Factory Pattern](./Factory%20Pattern/)** - Creates objects without specifying exact classes
- **[Singleton Pattern](./Singleton%20Pattern/)** - Ensures only one instance exists

### 🔗 Structural Patterns
*Deal with object composition and relationships between objects.*

- **[Adapter Pattern](./Adapter%20Pattern/)** - Allows incompatible interfaces to work together
- **[Bridge Pattern](./Bridge%20Pattern/)** - Separates abstraction from implementation
- **[Composite Pattern](./Composite%20Pattern/)** - Composes objects into tree structures
- **[Decorator Pattern](./Decorator%20Pattern/)** - Adds behavior to objects dynamically
- **[Facade Pattern](./Facade%20Pattern/)** - Provides simplified interface to complex subsystems

### ⚡ Behavioral Patterns
*Focus on communication between objects and the assignment of responsibilities.*

- **[Chain of Responsibility Pattern](./Chain%20of%20Responsibility%20Pattern/)** - Passes requests along handler chain
- **[Command Pattern](./Command%20Pattern/)** - Encapsulates requests as objects

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **TypeScript** (for TS examples)
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/mohmmadpouryousefi/design-patterns.git

# Navigate to project directory
cd design-patterns

# Install dependencies (if needed)
npm install -g typescript  # For TypeScript compilation
```

### Running Examples

Each pattern includes both JavaScript and TypeScript implementations:

```bash
# JavaScript examples
cd "Factory Pattern/js"
node index.js

# TypeScript examples
cd "Factory Pattern/ts"
tsc index.ts --target es2020 && node index.js
```

## 📁 Repository Structure

```
design-patterns/
├── README.md                          # This file
├── Abstract Factory Pattern/          # Pattern implementation
│   ├── README.md                     # Pattern explanation
│   ├── js/                           # JavaScript implementation
│   │   ├── index.js                  # Executable example
│   │   └── README.md                 # JS-specific notes
│   └── ts/                           # TypeScript implementation
│       ├── index.ts                  # Type-safe example
│       └── README.md                 # TS-specific notes
└── [Other Patterns]/                 # Similar structure for each pattern
```

## 💡 Key Features

- ✅ **11 Design Patterns** implemented and tested
- 🔄 **Dual Language Support** - JavaScript ES6+ and TypeScript
- 📚 **Comprehensive Documentation** - Each pattern includes detailed explanations
- 🎯 **Practical Examples** - Real-world use cases and implementations
- 🧪 **Tested Code** - All examples are executable and verified
- 🏗️ **Consistent Structure** - Uniform organization across all patterns
- 📝 **Step-by-step Guides** - Clear implementation steps for learning

## 📋 Implemented Patterns

| Pattern | Category | JavaScript | TypeScript | Description |
|---------|----------|:----------:|:----------:|-------------|
| [Abstract Factory](./Abstract%20Factory%20Pattern/) | Creational | ✅ | ✅ | Creates families of related objects |
| [Adapter](./Adapter%20Pattern/) | Structural | ✅ | ✅ | Interface compatibility adapter |
| [Bridge](./Bridge%20Pattern/) | Structural | ✅ | ✅ | Separates abstraction from implementation |
| [Builder](./Builder%20Pattern/) | Structural | ✅ | ✅ | Step-by-step object construction |
| [Chain of Responsibility](./Chain%20of%20Responsibility%20Pattern/) | Behavioral | ✅ | ✅ | Handler chain for requests |
| [Command](./Command%20Pattern/) | Behavioral | ✅ | ✅ | Encapsulates requests as objects |
| [Composite](./Composite%20Pattern/) | Structural | ✅ | ✅ | Tree structure composition |
| [Decorator](./Decorator%20Pattern/) | Structural | ✅ | ✅ | Dynamic behavior addition |
| [Facade](./Facade%20Pattern/) | Structural | ✅ | ✅ | Simplified complex subsystem interface |
| [Factory](./Factory%20Pattern/) | Creational | ✅ | ✅ | Object creation without specifying classes |
| [Singleton](./Singleton%20Pattern/) | Creational | ✅ | ✅ | Single instance management |

## 🎯 Learning Path

**Recommended order for beginners:**

1. **Start with Creational** - [Singleton](./Singleton%20Pattern/) → [Factory](./Factory%20Pattern/) → [Builder](./Builder%20Pattern/)
2. **Move to Structural** - [Adapter](./Adapter%20Pattern/) → [Facade](./Facade%20Pattern/) → [Decorator](./Decorator%20Pattern/)
3. **Master Behavioral** - [Command](./Command%20Pattern/) → [Chain of Responsibility](./Chain%20of%20Responsibility%20Pattern/)

## 🔄 Daily Pattern Challenge

This repository follows a **daily implementation approach** - one pattern per day with complete documentation and examples. Each implementation includes:

- 📖 **Theoretical explanation**
- 🔧 **Step-by-step implementation**
- 💻 **Practical examples**
- ✅ **Working code in both languages**

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/new-pattern`)
3. **Implement the pattern** following our structure
4. **Add comprehensive documentation**
5. **Test both JS and TS implementations**
6. **Submit a pull request**

### Contribution Guidelines

- Follow the existing folder structure
- Include both JavaScript and TypeScript examples
- Add comprehensive README documentation
- Ensure code is executable and tested
- Use meaningful commit messages
- Include step-by-step implementation guides

## 📚 Resources

- 📖 [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)
- 🔗 [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
- 📝 [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- 🔷 [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the **Gang of Four (GoF)** design patterns book
- Thanks to the JavaScript and TypeScript communities
- Built with ❤️ for developers learning design patterns

---

⭐ **Star this repository** if you find it helpful for learning design patterns!