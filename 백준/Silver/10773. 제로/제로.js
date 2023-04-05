const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

//  정수 k가 주어진다.
// 입력 수가 0이라면 최근수를 pop 아니라면 push
// reduce를 이용해서 현재수를 파악하면 될 것 같다.
// 현재수가 0이 아니면 -> acc push => 종료되었을 땐 합구하기
const sol = (input) => {
  const N = input.shift();
  const answer = input.reduce((acc, cur) => {
    cur === 0 ? acc.pop() : acc.push(cur);
    return acc;
  }, []);

  return answer.length > 0 ? answer.reduce((acc, cur) => acc + cur, 0) : 0;
};
console.log(sol(input));
