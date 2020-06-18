#!/usr/bin/env
const { exec } = require('child_process');
console.log('run started');
exec('npm start').stdout.pipe(process.stdout);
