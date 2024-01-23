#!/usr/bin/env node

import func from '../../scr/cli.js';
import evenOrNot from '../../scr/games/brain-even.js';
import greetings from '../../scr/games/brain-games.js';

greetings();
const name = func();
evenOrNot(name);
