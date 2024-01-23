#!/usr/bin/env node
import progression from '../../scr/games/brain-progression.js';
import func from '../../scr/cli.js';
import greetings from '../../scr/games/brain-games.js';

greetings();
const name = func();
progression(name);
