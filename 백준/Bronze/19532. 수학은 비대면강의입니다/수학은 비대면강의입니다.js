const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sol = (input) => {
  const arr = input.reduce((acc, _, idx) => {
    if (idx % 3 === 2) {
      acc.push(input.slice(idx - 2, idx + 1));
    }
    return acc;
  }, []);

  const [a, b, c] = arr[0];
  const [d, e, f] = arr[1];

  for (let i = -999; i < 1000; i++) {
    for (let j = -999; j < 1000; j++) {
      // console.log(i, j);
      let cal1 = a * i + b * j === c;
      let cal2 = d * i + e * j === f;
      if (cal1 && cal2) {
        return [i, j].join(' ');
      }
    }
  }
};
console.log(sol(input));
