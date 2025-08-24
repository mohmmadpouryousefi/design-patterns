// step 1

class DatabaseConnectionSingleton {
  private static instance: DatabaseConnectionSingleton | null = null;
  private connection: string | null;
  private isConnected: boolean;

  private constructor() {
    // Initialize the database connection
    this.connection = null;
    this.isConnected = false;
  }

  // step 2
  public static getInstance(): DatabaseConnectionSingleton {
    if (!DatabaseConnectionSingleton.instance) {
      DatabaseConnectionSingleton.instance = new DatabaseConnectionSingleton();
    }
    return DatabaseConnectionSingleton.instance;
  }

  public connect(): void {
    if (!this.isConnected) {
      this.connection = "Database connection established";
      this.isConnected = true;
      console.log("Connected to database");
    } else {
      console.log("Already connected to database");
    }
  }

  public disconnect(): void {
    if (this.isConnected) {
      this.connection = null;
      this.isConnected = false;
      console.log("Disconnected from database");
    }
  }

  public query(sql: string): string | null {
    if (this.isConnected) {
      console.log(`Executing query: ${sql}`);
      return `Result for: ${sql}`;
    } else {
      console.log("Not connected to database");
      return null;
    }
  }

  public getConnectionStatus(): boolean {
    return this.isConnected;
  }
}

// step 3

const dbInstance1 = DatabaseConnectionSingleton.getInstance();
const dbInstance2 = DatabaseConnectionSingleton.getInstance();

console.log("dbInstance1 === dbInstance2:", dbInstance1 === dbInstance2); // Output: true

dbInstance1.connect();
dbInstance2.query("SELECT * FROM users");

// Both instances refer to the same object
console.log("dbInstance1.getConnectionStatus():", dbInstance1.getConnectionStatus()); // Output: true
console.log("dbInstance2.getConnectionStatus():", dbInstance2.getConnectionStatus()); // Output: true

dbInstance1.disconnect();
console.log("dbInstance2.getConnectionStatus():", dbInstance2.getConnectionStatus()); // Output: false

// Attempting to create a new instance directly would cause a TypeScript error:
// const dbInstance3 = new DatabaseConnectionSingleton(); // Error: Constructor of class 'DatabaseConnectionSingleton' is private

// Attempting to create a new instance directly would cause a TypeScript error:
// const dbInstance3 = new DatabaseConnection(); // Error: Constructor of class 'DatabaseConnection' is private
