#!/usr/bin/env node
// const os = require('os');
// const { spawn } = require('child_process');
// console.log('run started');
// spawn('npm start', { stdio: 'inherit', shell: os.platform() === 'win32' });
// console.log('run ended');
const execSync = require('child_process').execSync;
console.log('run started' + __dirname);
execSync('npm start', { cwd: __dirname });
console.log('run ended');
