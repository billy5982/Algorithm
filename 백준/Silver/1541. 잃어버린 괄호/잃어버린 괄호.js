const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim();

/*
  그리디 알고리즘
  최솟값 만들기
  더하기가 존재한다면 해당 수를 더한 다음 -를 해주는 것이 최솟값을 만들기 유리하다.
  (50 + 30) - (20 + 30)
  20 - (30 + 30) - 20
  -를 기준으로 입력값을 받는다.
  만약 +가 포함되어있다면 해당 값을 기준으로 배열을 나눈다음 +한 값을 리턴한다.
  그 다음 => 모든 수를 - 하면 최솟값이 나올 것같다. (참고한 풀이)
*/
const sol = (input) => {
  const checkPlus = input.split('-');
  const answer = checkPlus
    .map((el) => {
      if (el.includes('+')) {
        const nums = el.split('+').reduce((acc, cur) => +acc + +cur, 0);
        return nums;
      } else {
        return +el;
      }
    })
    .reduce((acc, cur) => acc - cur);
  return answer;
};

console.log(sol(input));
