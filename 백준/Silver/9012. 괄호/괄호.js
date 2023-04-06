const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x, idx) => (idx !== 0 ? x.split('') : +x));

//  (일 땐  + )일 떄  - 계속 연산을 실행
// 중간마다 값체크 음수 도달 시  )가 초과한다는 뜻으로 break;
const sol = (input) => {
  input.shift();
  const answer = [];

  for (let el of input) {
    let result = 0;
    let bool = false;
    for (let i = 0; i < el.length; i++) {
      switch (el[i]) {
        case '(':
          result += 1;
          break;
        case ')':
          result -= 1;
      }
      if (result < 0) {
        bool = true;
        break;
      }
      if (i === el.length - 1 && result !== 0) {
        bool = true;
        break;
      }
    }
    bool ? answer.push('NO') : answer.push('YES');
  }

  return answer.join('\n');
};
console.log(sol(input));
