#!/usr/bin/env node
import primeGame from '../../scr/games/brain-prime.js';
import func from '../../scr/cli.js';
import greetings from '../../scr/games/brain-games.js';

func();
const name = greetings();
console.log(`Hello, ${name}!`);
primeGame(name);
