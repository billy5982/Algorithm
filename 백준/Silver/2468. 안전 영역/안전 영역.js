const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __filename.split('/').pop().slice(0, -3) + '.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el, idx) => (idx === 0 ? +el : el.split(' ').map(Number)));

/* 
  0~최대 높이까지 잠겨야한다. 또한 최대 높이에서 잠긴 곳은 0으로 표시한다.
  모든 순회가 끝나면 해당 지역의 안전구역을 표시하고 높이를 올린다. => 최대값 비교 필요

  안전 구역 기준 -> 좌 우 상 하 중 하나만 있어도 안전구역을 하나로 친다
  재귀 함수를 이용해서 주변에 인접해있는 모든 좌표를 구한다. 해당 좌표는 1개의 안전구역 처리한다.
  1개만 있어도 해당 구역은 안전구역이다. 대신 방문한 구역은 처리해야한다.

  그중 나올 수 있는 최대 개수를 구해야한다.
*/

function solution(input) {
  let maxAxis = input[0];
  let max = 0;

  const moveX = [1, 0, -1, 0],
    moveY = [0, 1, 0, -1];

  const originAxis = input.slice(1);
  const maxDeps = originAxis.reduce((acc, cur) => {
    let curMax = cur.reduce((acc2, cur2) => (acc2 > cur2 ? acc2 : cur2), 0);
    return acc > curMax ? acc : curMax;
  }, 0);

  // maxDeps까지
  for (let i = 0; i <= maxDeps; i++) {
    const diveAxis = originAxis.map((el) => el.map((el2) => (el2 > i ? el2 : 0)));
    let area = 0;

    diveAxis.forEach((_, axisY) => {
      _.forEach((_, axisX) => {
        function recursive(axis) {
          // 순회하고 있는 값이 0이라면 함수를 종료
          if (axis === 0) return;
          // 순회하고 있는 값이 0이 아니라면 다음 순회지로 이동. 현재 자리는 0으로 바꾼다.
          const [x, y] = axis;
          // 현재 순회한 좌표는 초기화
          diveAxis[y][x] = 0;
          for (let moveAxis = 0; moveAxis < maxAxis; moveAxis++) {
            // 계산한 좌표
            let moveFinY = y + moveY[moveAxis];
            let moveFinX = x + moveX[moveAxis];
            // 좌표 바깥을 나가지 않는지
            if (moveFinY < maxAxis && moveFinY > -1 && moveFinX < maxAxis && moveFinX > -1) {
              // 잠기지 않았다면? 주변 좌표를 탐색
              if (diveAxis[moveFinY][moveFinX]) {
                recursive([moveFinX, moveFinY]);
              }
            }
          }
        }
        // 순회하는 좌표가 잠기지 않았다면?
        if (diveAxis[axisY][axisX]) {
          recursive([axisX, axisY]);
          area++;
        }
      });
    });

    max = max > area ? max : area;
  }

  return max;
}

console.log(solution(input));
