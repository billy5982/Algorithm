const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

// 배 (0) 등(1) 도 : 배 1, 등 3
// 3 : 도 / 2 : 개 / 1 : 걸 / 0 : 윷 ,4 : 모
function solution(input) {
  const ans = ['D', 'C', 'B', 'A', 'E'];
  input.forEach((cur) => {
    let sum = cur.reduce((acc1, cur1) => acc1 + cur1, 0);
    console.log(ans[sum]);
  });
}
solution(input);
