#!/usr/bin/env node
const npm = require('npm');
console.log('run started');
npm.command.run('start', (err) => {});
console.log('run ended');
