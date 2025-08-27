// Prototype Pattern - TypeScript example
// Strongly-typed implementation using a generic Prototype interface
function deepClone(obj) {
    // For demonstration we use JSON-based clone. Replace with structuredClone
    // or a proper deep-clone utility for complex types (Date, Map, Set, funcs).
    return JSON.parse(JSON.stringify(obj));
}
class Prototype {
    constructor(state) {
        this.state = state;
    }
    clone() {
        return new Prototype(deepClone(this.state));
    }
}
class PrototypeRegistry {
    constructor() {
        this.prototypes = {};
    }
    register(key, prototype) {
        this.prototypes[key] = prototype;
    }
    unregister(key) {
        delete this.prototypes[key];
    }
    clone(key) {
        const prototype = this.prototypes[key];
        if (!prototype)
            throw new Error(`Prototype with key '${key}' not found`);
        return prototype.clone();
    }
}
const registry = new PrototypeRegistry();
const userPrototype = new Prototype({
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
