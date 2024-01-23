#!/usr/bin/env node
import func from '../../scr/cli.js';
import gameGcd from '../../scr/games/brain-gcd.js';
import greetings from '../../scr/games/brain-games.js';

greetings();
const name = func();
gameGcd(name);
