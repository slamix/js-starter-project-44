#!/usr/bin/env node
import calc from '../../scr/games/brain-calc.js';
import func from '../../scr/cli.js';

const name = func();
calc(name);
