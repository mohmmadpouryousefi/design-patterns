// Step 1

// Base handler class
class Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler) {
    this.nextHandler = handler;
  }

  handleRequest(request: string) {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

// Step 2

// Concrete handler class 1
class ConcreteHandler1 extends Handler {
  handleRequest(request: string) {
    if (request === "type1") {
      console.log("ConcreteHandler1 handles the request.");
    } else {
      super.handleRequest(request);
    }
  }
}

// Concrete handler class 2
class ConcreteHandler2 extends Handler {
  handleRequest(request: string) {
    if (request === "type2") {
      console.log("ConcreteHandler2 handles the request.");
    } else {
      super.handleRequest(request);
    }
  }
}

// Concrete handler class 3
class ConcreteHandler3 extends Handler {
  handleRequest(request: string) {
    if (request === "type3") {
      console.log("ConcreteHandler3 handles the request.");
    } else {
      super.handleRequest(request);
    }
  }
}

// Step 3

// Create instances of the concrete handlers
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

// Set the chain of responsibility
handler1.setNext(handler2);
handler2.setNext(handler3);

// Simulate handling requests
handler1.handleRequest("type2");
handler1.handleRequest("type1");
handler1.handleRequest("type3");
handler1.handleRequest("unknown");

// Output:

// ConcreteHandler2 handles the request.
// ConcreteHandler1 handles the request.
// ConcreteHandler3 handles the request.