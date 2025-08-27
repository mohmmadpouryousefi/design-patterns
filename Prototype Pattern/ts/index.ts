// Prototype Pattern - TypeScript example
// Strongly-typed implementation using a generic Prototype interface

type PlainObject = { [key: string]: any };

function deepClone<T extends PlainObject>(obj: T): T {
  // For demonstration we use JSON-based clone. Replace with structuredClone
  // or a proper deep-clone utility for complex types (Date, Map, Set, funcs).
  return JSON.parse(JSON.stringify(obj)) as T;
}

class Prototype<T extends PlainObject> {
  public state: T;

  constructor(state: T) {
    this.state = state;
  }

  public clone(): Prototype<T> {
    return new Prototype<T>(deepClone(this.state));
  }
}

class PrototypeRegistry<T extends PlainObject> {
  private prototypes: Record<string, Prototype<T>> = {};

  public register(key: string, prototype: Prototype<T>): void {
    this.prototypes[key] = prototype;
  }

  public unregister(key: string): void {
    delete this.prototypes[key];
  }

  public clone(key: string): Prototype<T> {
    const prototype = this.prototypes[key];
    if (!prototype) throw new Error(`Prototype with key '${key}' not found`);
    return prototype.clone();
  }
}

// Example usage
type UserState = {
  name: string;
  permissions: string[];
  profile: { age: number; location: string };
};

const registry = new PrototypeRegistry<UserState>();

const userPrototype = new Prototype<UserState>({
  name: 'Default User',
  permissions: ['read'],
  profile: { age: 30, location: 'Unknown' }
});

registry.register('user', userPrototype);

const user1 = registry.clone('user');
const user2 = registry.clone('user');

user1.state.name = 'Alice';
user1.state.permissions.push('write');
user1.state.profile.location = 'Tehran';

console.log('userPrototype.state:', userPrototype.state);
console.log('user1.state:', user1.state);
console.log('user2.state:', user2.state);

// no exports - file intended to be run as a script in tests
