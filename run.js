#!/usr/bin/env node
// const os = require('os');
// const { spawn } = require('child_process');
// console.log('run started');
// spawn('npm start', { stdio: 'inherit', shell: os.platform() === 'win32' });
// console.log('run ended');
const execSync = require('child_process').execSync;
console.log('run started' + __dirname);
console.log('Starting directory: ' + process.cwd());
try {
  process.chdir(__dirname);
  console.log('New directory: ' + process.cwd());
} catch (err) {
  console.log('chdir: ' + err);
}

execSync(
  "./node_modules/.bin/cypress run --headed --spec 'cypress/integration/fill_hours.spec.js'",
  { cwd: __dirname }
);
console.log('run ended');
