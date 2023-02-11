const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .split('\n');

function solution(input) {
  let answer = '';
  // i = 모든 배열을 돌고 나서 증가
  // j 는 배열에 하나하나
  let maxLength = Math.max(...input.map((el) => el.length));

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j] && input[j][i]) {
        answer += input[j][i];
      }
    }
  }
  return answer;
}
console.log(solution(input))
