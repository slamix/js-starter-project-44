#!/usr/bin/env node
import calc from '../../scr/games/brain-calc.js';
import func from '../../scr/cli.js';
import greetings from '../../scr/games/brain-games.js';

greetings();
const name = func();
calc(name);
