// Prototype Pattern - JavaScript example
// Demonstrates cloning objects (prototype-based copying) with a registry example

function deepClone(obj) {
  // NOTE: JSON-based clone is simple and effective for plain data examples.
  // It does not clone functions, Dates, Maps, Sets, etc. For production use,
  // replace with a proper deep clone (structuredClone or lodash.cloneDeep).
  return JSON.parse(JSON.stringify(obj));
}

class Prototype {
  constructor(state = {}) {
    this.state = state;
  }

  clone() {
    return new Prototype(deepClone(this.state));
  }
}

// A simple registry that can store prototypes by key and clone on demand.
class PrototypeRegistry {
  constructor() {
    this._prototypes = {};
  }

  register(key, prototype) {
    this._prototypes[key] = prototype;
  }

  unregister(key) {
    delete this._prototypes[key];
  }

  clone(key) {
    const prototype = this._prototypes[key];
    if (!prototype) throw new Error(`Prototype with key '${key}' not found`);
    return prototype.clone();
  }
}

// Example usage
const registry = new PrototypeRegistry();

const userPrototype = new Prototype({
  name: "Default User",
  permissions: ["read"],
  profile: { age: 30, location: "Unknown" },
});

registry.register("user", userPrototype);

const user1 = registry.clone("user");
const user2 = registry.clone("user");

user1.state.name = "Alice";
user1.state.permissions.push("write");
user1.state.profile.location = "Tehran";

console.log("userPrototype.state:", userPrototype.state);
console.log("user1.state:", user1.state);
console.log("user2.state:", user2.state);

// Shows that clones are independent copies of the prototype state

// Exporting for potential tests (CommonJS environment)
module.exports = { Prototype, PrototypeRegistry };
