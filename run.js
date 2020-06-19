#!/usr/bin/env node
// const os = require('os');
// const { spawn } = require('child_process');
// console.log('run started');
// spawn('npm start', { stdio: 'inherit', shell: os.platform() === 'win32' });
// console.log('run ended');
const execSync = require('child_process').execSync;
console.log('run started' + __dirname);
execSync(
  "cypress run --headed --spec 'cypress/integration/fill_hours.spec.js'",
  { cwd: __dirname }
);
console.log('run ended');
