const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x, idx) => (x.includes(' ') ? x.split(' ').map(Number) : +x));

// obj에 수를 보관한다.
// 해당 수가 존재한다면 1을 리턴 존재하지 않는다면 0을 리턴한다.
// O(n) 으로 제작한다.
const sol = (input) => {
  const [N, baseNum, M, searchNum] = input;
  let baseObj = {};
  for (let i = 0; i < N; i++) {
    baseObj[baseNum[i]] = true;
  }

  const result = [];
  for (let j = 0; j < M; j++) {
    if (baseObj[searchNum[j]]) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result.join('\n');
};
console.log(sol(input));
