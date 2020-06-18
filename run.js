#!/usr/bin/env node
const { exec } = require('child_process');
console.log('run started');
exec('npm start').stdout.pipe(process.stdout);
