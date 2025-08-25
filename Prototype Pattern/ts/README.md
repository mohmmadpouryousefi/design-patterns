# Prototype Pattern (TypeScript)

This folder contains a strongly-typed TypeScript implementation of the Prototype Pattern.

How to run:

```powershell
tsc index.ts --target es2020 && node index.js
```

Notes:
- Uses JSON-based deep clone for demonstration. Replace with `structuredClone` or `lodash.cloneDeep` for production-grade cloning of complex types.
