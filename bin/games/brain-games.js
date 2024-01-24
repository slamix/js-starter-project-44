#!/usr/bin/env node
import func from '../../scr/cli.js';
import greetings from '../../scr/games/brain-games.js';

func();
const nameOfPlayer = greetings();
console.log(`Hello, ${nameOfPlayer}!`);
