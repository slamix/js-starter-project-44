#!/usr/bin/env node
import progression from '../../scr/games/brain-progression.js';
import func from '../../scr/cli.js';

const name = func();
progression(name);
