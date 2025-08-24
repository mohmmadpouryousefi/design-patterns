// step 1

class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }

    // Initialize the database connection
    this.connection = null;
    this.isConnected = false;
    DatabaseConnection.instance = this;
  }

  // step 2
  static getInstance() {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  connect() {
    if (!this.isConnected) {
      this.connection = "Database connection established";
      this.isConnected = true;
      console.log("Connected to database");
    } else {
      console.log("Already connected to database");
    }
  }

  disconnect() {
    if (this.isConnected) {
      this.connection = null;
      this.isConnected = false;
      console.log("Disconnected from database");
    }
  }

  query(sql) {
    if (this.isConnected) {
      console.log(`Executing query: ${sql}`);
      return `Result for: ${sql}`;
    } else {
      console.log("Not connected to database");
      return null;
    }
  }
}

// step 3

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
const db3 = new DatabaseConnection();

console.log("db1 === db2:", db1 === db2); // Output: true
console.log("db1 === db3:", db1 === db3); // Output: true
console.log("db2 === db3:", db2 === db3); // Output: true

db1.connect();
db2.query("SELECT * FROM users");
db3.disconnect();

// All instances refer to the same object
console.log("db1.isConnected:", db1.isConnected); // Output: false
console.log("db2.isConnected:", db2.isConnected); // Output: false
