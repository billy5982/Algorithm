const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x, idx) => x);

input.pop();

const sol = (input) => {
  const result = [];
  for (let el of input) {
    const word = [...el].reverse().join('');
    word === el ? result.push('yes') : result.push('no');
  }
  return result.join('\n');
};
console.log(sol(input));
