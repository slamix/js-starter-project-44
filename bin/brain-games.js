#!/usr/bin/env node
import func from '../scr/cli.js';
import evenOrNot from './brain-even.js';

console.log('Welcome to the Brain Games!');
const nameOfPlayer = func();
console.log(`Hello, ${nameOfPlayer}`);
