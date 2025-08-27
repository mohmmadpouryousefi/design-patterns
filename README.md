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
# 🎯 Design Patterns — JavaScript & TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

Practical, well-documented implementations of common design patterns in both JavaScript (ES6+) and TypeScript. Each pattern lives in its own folder with runnable examples and a short README describing the intent, motivation, and usage.

## What's changed (latest)
- Added runnable test harnesses: `scripts/test-js.js` and `scripts/test-ts.js` to automatically execute examples.
- Added `package.json` (devDependency: TypeScript) and `tsconfig.json` (module: commonjs) to produce deterministic CommonJS outputs for running examples in Node.
- CI workflow updated to install dependencies safely and run both harnesses on push/PR.

## Quick start

Prerequisites
- Node.js 18+ (recommended)
- Git

Clone and run all examples locally

```powershell
# clone
git clone https://github.com/mohmmadpouryousefi/design-patterns.git
cd design-patterns

# install local dev deps (creates package-lock.json)
npm install

# run JS examples across the repo
npm run test-js

# run TS examples across the repo (compiles each ts/index.ts to CommonJS then executes)
npm run test-ts

# 🎯 Design Patterns in JavaScript and TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

Practical, well-documented implementations of common design patterns in both JavaScript (ES6+) and TypeScript. Each pattern lives in its own folder with runnable examples and a short README describing intent, motivation, and usage.

## What's changed (latest)

- Added runnable test harnesses: `scripts/test-js.js` and `scripts/test-ts.js` to automatically execute examples.
- Added `package.json` (devDependency: TypeScript) and `tsconfig.json` (module: commonjs) to produce deterministic CommonJS outputs for running examples in Node.
- CI workflow updated to install dependencies safely and run both harnesses on push/PR.

## Quick start

Prerequisites
- Node.js 18+ (recommended)
- Git

Clone and run all examples locally

```powershell
# clone
git clone https://github.com/mohmmadpouryousefi/design-patterns.git
cd design-patterns

# install local dev deps (creates package-lock.json)
npm install

# run JS examples across the repo
npm run test-js

# run TS examples across the repo (compiles each ts/index.ts to CommonJS then executes)
npm run test-ts

# run both
npm test
```

Notes
- CI will run `npm ci` when a lockfile exists; otherwise it falls back to `npm install`.
- `tsconfig.json` is configured with `module: commonjs` so compiled TS runs in Node without ESM issues in the harness.

## Project layout

Each pattern follows the same structure for consistency and discoverability:

```
<Pattern Name>/
	├─ README.md        # short explanation and examples
	├─ js/
	│   ├─ index.js     # runnable JS example
	│   └─ README.md
	└─ ts/
			├─ index.ts     # runnable TS example (compiled to CommonJS for tests)
			└─ README.md
```

Top-level helper scripts
- `scripts/test-js.js` — discovers and runs all `js/index.js` examples
- `scripts/test-ts.js` — compiles each `ts/index.ts` to CommonJS and runs the output

## Implemented patterns

The repository contains a growing set of patterns (JS + TS). Current examples include:

- Abstract Factory
- Adapter
- Bridge
- Builder
- Chain of Responsibility
- Command
- Composite
- Decorator
- Facade
- Factory
- Singleton
- Prototype
- Flyweight

Each pattern folder contains a README with a small explanation and usage notes.

## Contributing

We welcome contributions and new pattern implementations. Please follow these guidelines:

1. Fork the repo and create a feature branch: `git checkout -b feat/<pattern-name>`
2. Add both `js` and `ts` implementations and a clear `README.md` for the pattern
3. Ensure examples are runnable and update `scripts` if necessary
4. Run the test harnesses locally: `npm run test-js` and `npm run test-ts`
5. Open a pull request with an explanation and short demo

## CI

Continuous integration runs on push and pull-request to `main`. The workflow will:

1. Checkout the repository
2. Setup Node.js (matrix: Node 18.x, 20.x)
3. Install dependencies (`npm ci` if lockfile exists; otherwise `npm install`)
4. Run `scripts/test-js.js` and `scripts/test-ts.js`

If you'd like deterministic CI installs, run `npm install` locally and commit the generated `package-lock.json`.

## License

This project is licensed under the MIT License — see the `LICENSE` file.

---

If you want, I can also:
- Commit a `package-lock.json` (by running `npm install`) and push it so CI uses `npm ci`.
- Restore explicit TS exports in examples now that CommonJS compilation is configured.

Enjoy learning — star the repo if you find it useful! 🎯
