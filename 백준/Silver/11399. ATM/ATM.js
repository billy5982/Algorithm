const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n');

/*
 1,2,3,3,4
 0 + 1 = 1
 1 + 2 = 3
 3+ 3 = 6
 6 + 3 = 9

*/
const sol = (input) => {
  let N = input.shift();
  let times = input.shift().split(' ').map(Number);

  const sortedTimes = times.sort((a, b) => a - b);
  let sum = 0;
  let total = 0;
  for (let i = 0; i < N; i++) {
    sum = sum + sortedTimes[i];
    total += sum;
  }
  return total;
};

console.log(sol(input));
