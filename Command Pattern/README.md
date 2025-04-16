# Command Pattern


The Command Pattern is a behavioral design pattern that turns a request or simple operation into a separate object. This object encapsulates all information required for executing the request, including the method to be called, its arguments, and the receiver of the request. This decouples the sender (client) from the receiver, allowing for more flexibility and extensibility in handling requests.

In the example, we implemented the Command Pattern for controlling a light using a remote control. The Light class is the receiver of the commands, and it has methods to turn the light on and off.

The Command interface defines the execute method, which is implemented by concrete commands such as TurnOnCommand and TurnOffCommand. Each concrete command holds a reference to the receiver (Light) and invokes the corresponding method on the receiver.

The RemoteControl class is the invoker, and it holds a reference to the current command. When the pressButton method is called on the RemoteControl, it executes the execute method of the current command, delegating the request to the receiver.

Using the Command Pattern allows us to decouple the sender (client) from the receiver, making it easier to add new commands or extend the functionality of existing ones without modifying the client's code.