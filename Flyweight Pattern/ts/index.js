// Flyweight Pattern - TypeScript example
class ParticleType {
    constructor(color, texture) {
        this.color = color;
        this.texture = texture;
    }
    render(x, y, vx, vy) {
        console.log(`Render particle [color=${this.color}, texture=${this.texture}] at (${x},${y}) with v=(${vx},${vy})`);
    }
}
class ParticleFactory {
    constructor() {
        this.types = new Map();
    }
    getType(color, texture) {
        const key = `${color}:${texture}`;
        if (!this.types.has(key)) {
            this.types.set(key, new ParticleType(color, texture));
        }
        return this.types.get(key);
    }
    getCount() {
        return this.types.size;
    }
}
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.factory = new ParticleFactory();
    }
    createParticle(color, texture, x, y, vx, vy) {
        const type = this.factory.getType(color, texture);
        this.particles.push({ type, x, y, vx, vy });
    }
    render() {
        for (const p of this.particles) {
            p.type.render(p.x, p.y, p.vx, p.vy);
        }
        console.log(`Particle types in factory: ${this.factory.getCount()}`);
    }
}
// Example usage
const system = new ParticleSystem();
system.createParticle('red', 'smoke', 10, 20, 1, 0);
system.createParticle('red', 'smoke', 12, 25, 0.5, -0.2);
system.createParticle('blue', 'spark', 50, 60, -1, 0.3);
system.createParticle('red', 'smoke', 15, 30, 0, 1);
system.render();
// no exports - file intended to be run as a script in tests
