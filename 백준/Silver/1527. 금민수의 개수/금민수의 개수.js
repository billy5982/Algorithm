const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);

/*
  브루스포트 방식 -> 완전 탐색 기법이다.
  [4][7]을 가지고 모든 조합을 만들기.
  만든 모든 수를 배열에 보관해야함.
  깊이는 최대 length 까지
*/

function solution(input) {
  let origin = ['4', '7'];
  let result = [];
  let deps = `${input[1]}`.length;
  function make47(depth, str) {
    if (depth === deps) {
      return;
    }
    for (let i = 0; i < 2; i++) {
      result.push(str + origin[i]);
      make47(depth + 1, str + origin[i]);
    }
  }

  for (let i = 0; i < 2; i++) {
    result.push(origin[i]);
    make47(1, origin[i]);
  }

  return result.map(Number).filter((el) => el >= input[0] && el <= input[1]).length;
}

console.log(solution(input));
