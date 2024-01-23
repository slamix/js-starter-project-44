#!/usr/bin/env node

import func from '../../scr/cli.js';
import evenOrNot from '../../scr/games/brain-even.js';

const name = func();
evenOrNot(name);
