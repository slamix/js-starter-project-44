#!/usr/bin/env node
import primeGame from '../../scr/games/brain-prime.js';
import func from '../../scr/cli.js';

const name = func();
primeGame(name);
