const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n');

// 배 (0) 등(1) 도 : 배 1, 등 3
// 3 : 도 / 2 : 개 / 1 : 걸 / 0 : 윷 ,4 : 모
function solution(input) {
  let [lengA, lengB] = input[0].split(' ');

  let A = input[1].split('').reverse(),
    B = input[2].split('');
  let limit = +input[3],
    cnt = 0;
  let ans = A.concat(B).join('');

  while (cnt !== limit) {
    let str = [];
    // let flag = false;
    for (let i = 0; i < lengA + lengB - 1; i++) {
      // 현재 타겟이 A고 다음 타겟이 B일 경우에 자리 반전, 한번에 한번만 가능하기 때문에 break로 변환 후 끊어줘야함.
      if (str[i]) continue;
      if (A.includes(ans[i]) && B.includes(ans[i + 1])) {
        str[i] = ans[i + 1];
        str[i + 1] = ans[i];
      } else {
        str[i] = ans[i];
      }
    }
    ans = str.join('');
    cnt++;
  }
  // return input;
  return ans;
}
console.log(solution(input));
