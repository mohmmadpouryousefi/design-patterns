#!/usr/bin/env node
// Run JS examples in each pattern folder that contains js/index.js
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const entries = fs.readdirSync(root, { withFileTypes: true });

let total = 0;
let passed = 0;

for (const e of entries) {
  if (!e.isDirectory()) continue;
  const jsPath = path.join(root, e.name, "js", "index.js");
  if (fs.existsSync(jsPath)) {
    total++;
    console.log(`\n--- Running JS example for: ${e.name}`);
    try {
      const out = execSync(`node "${jsPath}"`, {
        stdio: "pipe",
        timeout: 10000,
      });
      console.log(out.toString());
      console.log(`✅ ${e.name} (JS) passed`);
      passed++;
    } catch (err) {
      console.error(`❌ ${e.name} (JS) failed`);
      if (err.stdout) console.error(err.stdout.toString());
      if (err.stderr) console.error(err.stderr.toString());
      // continue running other tests
    }
  }
}

console.log(`\nJS tests passed: ${passed}/${total}`);
if (passed !== total) process.exit(1);
