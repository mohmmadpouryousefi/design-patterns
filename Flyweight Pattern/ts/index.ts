// Flyweight Pattern - TypeScript example

class ParticleType {
  constructor(public color: string, public texture: string) {}

  render(x: number, y: number, vx: number, vy: number): void {
    console.log(`Render particle [color=${this.color}, texture=${this.texture}] at (${x},${y}) with v=(${vx},${vy})`);
  }
}

class ParticleFactory {
  private types: Map<string, ParticleType> = new Map();

  public getType(color: string, texture: string): ParticleType {
    const key = `${color}:${texture}`;
    if (!this.types.has(key)) {
      this.types.set(key, new ParticleType(color, texture));
    }
    return this.types.get(key)!;
  }

  public getCount(): number {
    return this.types.size;
  }
}

type Particle = { type: ParticleType; x: number; y: number; vx: number; vy: number };

class ParticleSystem {
  private particles: Particle[] = [];
  private factory = new ParticleFactory();

  public createParticle(color: string, texture: string, x: number, y: number, vx: number, vy: number): void {
    const type = this.factory.getType(color, texture);
    this.particles.push({ type, x, y, vx, vy });
  }

  public render(): void {
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
