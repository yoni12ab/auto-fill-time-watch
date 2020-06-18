#!/usr/bin/env node
const os = require('os');
const { spawn } = require('child_process');
console.log('run started');
spawn('npm start', { stdio: 'inherit', shell: os.platform() === 'win32' });
console.log('run ended');
