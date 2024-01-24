#!/usr/bin/env node
import func from '../../scr/cli.js';
import gameGcd from '../../scr/games/brain-gcd.js';
import greetings from '../../scr/games/brain-games.js';

func();
const name = greetings();
console.log(`Hello, ${name}!`);
gameGcd(name);
