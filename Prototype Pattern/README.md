# Prototype Pattern

The Prototype Pattern is a creational design pattern that allows cloning objects, including complex ones, without coupling code to their concrete classes. This pattern is useful when object creation is expensive or when you want to avoid large number of subclasses for similar objects.

This folder contains JavaScript and TypeScript examples that demonstrate how to create a prototype registry and clone objects on demand.

See the `js` and `ts` subfolders for runnable examples and instructions.
# 🧬 Prototype Pattern

The **Prototype Pattern** is a creational design pattern that allows cloning of objects, even complex ones, without coupling to their specific classes. It is particularly useful when object creation is expensive or when you want to avoid creating subclasses for every possible configuration.

## 📖 Key Concepts

- **Prototype**: The original object that serves as a template for cloning.
- **Cloning**: Creating a new object by copying the prototype.

## 🛠️ Implementation

### When to Use
- When object creation is expensive (e.g., involves database queries or complex computations).
- When you want to avoid creating multiple subclasses for different configurations.

### Benefits
- Reduces the need for subclassing.
- Speeds up object creation.
- Simplifies object creation logic.

---

## 📂 Folder Structure
