# Facade Pattern

The Facade Pattern is a structural design pattern that provides a simplified interface to a complex system, making it easier to use and understand. It acts as a higher-level interface that hides the complexities of the underlying system or multiple subsystems, providing a single entry point to access their functionalities.

The main goal of the Facade Pattern is to improve usability and maintainability by encapsulating the complexities within a single, easy-to-use interface. It promotes loose coupling between clients and subsystems, making it easier to change or extend the system without affecting the clients.

In the implementations, we have three subsystems: Engine, AirConditioner, and MusicSystem. The CarFacade class acts as a Facade that simplifies the usage of these subsystems. It provides high-level methods startCar() and stopCar() that internally call the appropriate methods of the subsystems. Clients can use the CarFacade to interact with the car functionalities without needing to know the complexities of the individual subsystems.