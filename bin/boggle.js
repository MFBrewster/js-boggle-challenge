'use strict';

const boggleVariants = require('../lib/boggle.js');
const boggle = boggleVariants.boggle;
const bigBoggle = boggleVariants.bigBoggle;
const superBigBoggle = boggleVariants.superBigBoggle;

const boggleTray = 'wxxxxoxxxxrxxxxd'.split('');

console.log(boggle(boggleTray, [[0, 0], [1, 1], [2, 2], [3, 3]]));
