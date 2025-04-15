# Bridge Pattern

The Bridge Pattern is a structural design pattern that decouples an abstraction from its implementation, allowing them to vary independently. It involves creating separate interface hierarchies for abstraction and implementation, and then connecting them through a bridge.

In this pattern, the abstraction represents the high-level logic, and the implementation represents the low-level details. By using a bridge, you can switch different implementations without affecting the abstraction, and vice versa.

In both implementations, we have an abstraction (Shape) and an implementation interface (Color). The Shape class represents the high-level abstraction, and the Color interface represents the low-level implementation. Concrete implementations (RedColor and BlueColor) provide the actual color logic.

The RedShape and BlueShape classes extend the Shape class and use composition to connect the abstraction with the implementation. The draw() method of each shape combines the color from the implementation with the shape's class name.

With this setup, we can easily add new shapes or colors without modifying existing classes, demonstrating the decoupling achieved by the Bridge Pattern.