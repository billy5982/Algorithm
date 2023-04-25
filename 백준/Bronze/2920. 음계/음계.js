const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split(' ')
  .map((x, idx) => +x);

// 첫수를 통해 mixed 를 구분해 낸다
// 초기 flag 선언 upper lower
// 8이면 lower, 1이면 upper
// 전체 순회시엔 차이가 1인지 반드시 확인한다. 차이가 1이 아니면 return mixed 를 하고 아니라면 lower , upper에 따라 반환한다.
const sol = (input) => {
  let firNum = input[0];
  // 1또는 8이 아니면 함수를 종료
  if (![1, 8].includes(firNum)) return 'mixed';
  let flag = firNum === 1 ? 'upper' : 'lower';
  for (let i = 0; i < input.length - 1; i++) {
    if (Math.abs(input[i] - input[i + 1]) !== 1) return 'mixed';
  }
  return flag === 'upper' ? 'ascending' : 'descending';
};
console.log(sol(input));
