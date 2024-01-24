#!/usr/bin/env node

import func from '../../scr/cli.js';
import evenOrNot from '../../scr/games/brain-even.js';
import greetings from '../../scr/games/brain-games.js';

func();
const name = greetings();
console.log(`Hello, ${name}!`);
evenOrNot(name);
