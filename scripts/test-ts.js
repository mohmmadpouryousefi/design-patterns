#!/usr/bin/env node
// Compile and run TS examples in each pattern folder that contains ts/index.ts
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const entries = fs.readdirSync(root, { withFileTypes: true });

let total = 0;
let passed = 0;

for (const e of entries) {
  if (!e.isDirectory()) continue;
  const tsPath = path.join(root, e.name, "ts", "index.ts");
  const outJs = path.join(root, e.name, "ts", "index.js");
  if (fs.existsSync(tsPath)) {
    total++;
    console.log(`\n--- Running TS example for: ${e.name}`);
    try {
      // compile with CommonJS module output to match Node execution environment
      execSync(`tsc "${tsPath}" --target es2020 --module commonjs`, {
        stdio: "pipe",
        timeout: 10000,
      });
      const out = execSync(`node "${outJs}"`, {
        stdio: "pipe",
        timeout: 10000,
      });
      console.log(out.toString());
      console.log(`✅ ${e.name} (TS) passed`);
      passed++;
    } catch (err) {
      console.error(`❌ ${e.name} (TS) failed`);
      if (err.stdout) console.error(err.stdout.toString());
      if (err.stderr) console.error(err.stderr.toString());
      // continue running other tests
    }
  }
}

console.log(`\nTS tests passed: ${passed}/${total}`);
if (passed !== total) process.exit(1);
