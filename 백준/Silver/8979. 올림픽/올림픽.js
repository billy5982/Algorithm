const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

/*
  1. 금메달 수가 더 많은 나라 수
  2. 금메달 수가 같으면 은메달 수 
  3. 금-은 메달 수가 같으면 동메달 수
  공동 2등이 존재할 수 있음. 금 - 은 - 동 순서로 
*/
// console.log(input);
function solution(input) {
  // 국가 수, 알고자하는 수
  const [N, K] = input[0];
  // console.log(K);
  // 0은 국가 번호 1~3까지 메달
  const findC = input
    .slice(1)
    .filter((el) => el[0] === K)[0]
    .slice(1)
    .join('');

  // console.log(findC);
  const country = input
    .slice(1)
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] > b[1] ? -1 : 0;
      }
      if (a[2] !== b[2]) {
        return a[2] > b[2] ? -1 : 0;
      }
      if (a[3] !== b[3]) {
        return a[3] > b[3] ? -1 : 0;
      }
      return 0;
    })
    .map((el) => {
      return [el[0], el.slice(1).join('')];
    })
    .findIndex((el) => el[1] === findC);

  // 만약 같다면이 중요함. 모두 string으로 변환해서 해당 거의 인덱스를 찾으면 됨.

  return country + 1;
}

console.log(solution(input));
