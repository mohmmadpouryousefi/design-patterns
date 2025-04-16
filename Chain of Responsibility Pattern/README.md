# Chain of Responsibility Pattern 

The Chain of Responsibility pattern is a behavioral design pattern that allows multiple objects to handle a request without explicitly specifying which object should handle it. Instead of a single object processing the request, the request is passed along a chain of objects until one of them handles it.
In this pattern, each handler contains a reference to the next handler in the chain. If a handler can't handle the request, it passes the request to the next handler in the chain. This process continues until a handler successfully handles the request or until the end of the chain is reached.

# implementation

Step 1: Create a base handler class that defines the interface for handling requests and setting the next handler.

Step 2: Create concrete handler classes that extend the base handler and implement the specific handling logic.

Step 3: Use the concrete handler classes to create a chain and pass the request along the chain.


In the example, we created three concrete handler classes (ConcreteHandler1, ConcreteHandler2, and ConcreteHandler3) that handle requests of different types ('type1', 'type2', and 'type3'). If a handler can't handle the request, it passes the request to the next handler in the chain until it reaches the end of the chain.