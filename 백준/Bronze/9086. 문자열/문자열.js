const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n');

input.shift();
for (let el of input) {
  console.log(`${el[0]}${el[el.length - 1]}`);
}
