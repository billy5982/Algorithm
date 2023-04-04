const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim();

console.log(new Array(Math.floor(+input / 4)).fill('long').join(' ') + ' int');
