# Decorator Pattern

The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects without affecting the behavior of other objects from the same class. It is used to extend or enhance the functionality of an object dynamically at runtime. The pattern promotes the principle of open-closed, meaning classes should be open for extension but closed for modification.

In the example, we implemented the Decorator Pattern for a coffee ordering system. The Coffee interface defines the cost method, and BasicCoffee is the concrete implementation of this interface.

The CoffeeDecorator is an abstract class that implements the Coffee interface and maintains a reference to a Coffee object. Concrete decorators such as MilkDecorator and SugarDecorator extend the CoffeeDecorator class and override the cost method to add extra functionality to the cost calculation.

We create a sequence of decorators to modify the behavior of the basic coffee. The cost is dynamically updated as decorators are added. This pattern allows us to add new functionalities or combinations of functionalities to the base object without altering the original class, promoting flexibility and reusability.