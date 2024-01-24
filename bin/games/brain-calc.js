#!/usr/bin/env node
import calc from '../../scr/games/brain-calc.js';
import func from '../../scr/cli.js';
import greetings from '../../scr/games/brain-games.js';

func();
const name = greetings;
console.log(`Hello, ${name}!`);
calc(name);
