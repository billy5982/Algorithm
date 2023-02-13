const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

/*
  면적 -> 세로x가로 인데 모든 칸을 더하는 것도 면적이 된다....
  조건에 따라 해당 면적에 좌표를 true로 바꿔준다.
  해당 true 수를 전부 더하면 이는 면적이 된다...
*/
// console.log(input);
function solution(input) {
  let [cnt] = input[0];
  const paperSize = new Array(100).fill([]).map((el) => new Array(100).fill(false));
  // console.log(paperSize);
  let paperLimit = input.slice(1).map((el) => {
    return el;
  });

  for (let i = 0; i < cnt; i++) {
    for (let el of paperLimit) {
      for (let y = el[1]; y < el[1] + 10; y++) {
        for (let x = el[0]; x < el[0] + 10; x++) {
          paperSize[y][x] = true;
        }
      }
    }
  }
  let count = 0;
  paperSize.forEach((el) => {
    el.forEach((truth) => (truth ? (count += 1) : null));
  });
  // console.log(count);
  return count;
}

console.log(solution(input));
