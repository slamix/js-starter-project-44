#!/usr/bin/env node
import func from '../../scr/cli.js';
import gameGcd from '../../scr/games/brain-gcd.js';

const name = func();
gameGcd(name);
