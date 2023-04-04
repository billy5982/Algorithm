const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x, idx) => (idx === 1 ? x.split(' ').map(Number) : +x));

const nums = input[1].reduce((acc, cur) => {
  if (cur === input[2]) acc += 1;
  return acc;
}, 0);
console.log(nums);
