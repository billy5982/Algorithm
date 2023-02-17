const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n');

/*
  A로 만들 수 있는 조합중 B보다 작은 것을 유추해야한다. 그중 제일 큰것.
  예외 조건) 제일 작은  수가 B의 첫수보다 작다면?
  1. deps 는 동일하게 맞춘다.
  2.
*/

function solution(input) {
  const [Y, X] = input[0].split(' ').map(Number);
  const numbs = input.slice(1).map((el) => el.split('').map((el) => (el === '0' ? '*' : Number(el))));
  // console.log(numbs);
  // 가장 큰 정사각형은 직사각형의 작은 길이가 최대 나올수 있는 넓이이다.
  let flag = true;
  let area = Math.min(X, Y);
  // 들어온 좌표에 따라 인덱스를 찾아야한다.
  // 현재 좌표와 [y][x+area-1] [y+area-1][x] [y+area-1][x+area-1]
  // console.log(numbs);
  function findAxis(Y, X) {
    let curNum = numbs[Y][X];

    let checked = [numbs[Y][X + area - 1], numbs[Y + area - 1][X], numbs[Y + area - 1][X + area - 1]].filter((el) => el === curNum);
    // console.log([numbs[Y][X + area - 1], numbs[Y + area - 1][X], numbs[Y + area - 1][X + area - 1]]);
    // console.log(checked);
    return checked.length === 3 ? false : true;
  }
  // findAxis(0, 2);
  // 가장 크게 나올수 있는 조건을 먼저 확인한다
  while (area > 1 && flag) {
    for (let y = 0; y < Y - (area - 1); y++) {
      if (numbs[y + area - 1][0]) {
        for (let x = 0; x < X - (area - 1); x++) {
          if (numbs[y][X - (area - 1)]) {
            // console.log(y, x);
            flag = findAxis(y, x);
            if (!flag) return area * area;
          }
        }
      }
    }

    area--;
  }
  return area * area;
}

console.log(solution(input));
