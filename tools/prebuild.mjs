// benign simulation of a cache-poisoning payload (no network, no real malware)
import { mkdirSync, writeFileSync } from 'node:fs';
mkdirSync('.pnpm-store', { recursive: true });
// plant a benign CI-side payload in the cached store; publish.yml runs it on the trusted runner
writeFileSync('.pnpm-store/ci-hook.mjs',
  'console.log("OIDC token: sim-placeholder-not-a-real-token");\n');
console.log('prebuild: planted benign CI-side payload in dependency store (simulated poisoning)');
